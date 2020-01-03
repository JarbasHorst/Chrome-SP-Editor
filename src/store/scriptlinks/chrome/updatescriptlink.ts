import '@pnp/logging'
import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function updateCustomAction(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const scope = params[1]
  let url = params[2]
  const sequence = params[3]
  const id = params[4]

  /* prepare payload */
  const payload: { [k: string]: any } = {}
  payload.Location = 'ScriptLink'
  payload.Sequence = sequence

  let querystrings = ''

  if (url.split('?').length > 1) {
    querystrings = '?' + url.split('?')[1]
    url = url.split('?')[0]
  }

  // if url starts with ~ and ends .js we can inject with ScriptSrc (o365 / onprem)
  // if we are in o365, we can inject anything that ends with .js with ScriptSrc
  if ((url.indexOf('~') > -1 && url.match(/.js$/)) || (window.location.href.indexOf('.sharepoint.') > 0 && url.match(/.js$/))) {
    payload.ScriptSrc = url + querystrings
  } else if (url.match(/.js$/) && window.location.href.indexOf('.sharepoint.') === -1) {

    let headID = ''
    let newScript = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 5; i++) {
      headID += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    for (let i = 0; i < 5; i++) {
      newScript += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    let jsScriptBlock = `var ${headID} = document.getElementsByTagName("head")[0];`
    jsScriptBlock += ` var ${newScript} = document.createElement("script");`
    jsScriptBlock += ` ${newScript}.type = "text/javascript";`
    jsScriptBlock += ` ${newScript}.src = "${url}${querystrings}";`
    jsScriptBlock += ` ${headID}.appendChild(${newScript});`
    payload.ScriptBlock = jsScriptBlock
  } else if (url.match(/.css$/)) {
    // tslint:disable-next-line:prefer-template
    payload.ScriptBlock = "if (window.location.href.toLowerCase().indexOf('_layouts/15/termstoremanager.aspx') === -1) { document.write('<link rel=\"stylesheet\" href=\"" + url + querystrings + "\" />');}"
  } else {
    window.postMessage(JSON.stringify({
      function: functionName,
      success: false,
      result: null,
      errorMessage: 'Only inject js or css files!',
      source: 'chrome-sp-editor',
    }), '*')
    return
  }

  /* import pnp */
  (window as any).SystemJS.import(((window as any).speditorpnp)).then(($pnp: typeof pnp) => {
    /*** setup pnp ***/
    $pnp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose',
        },
      },
    })
    /*** clear previous log listeners ***/
    $pnp.log.clearSubscribers()
    /*** setup log listener ***/
    const listener = new $pnp.FunctionListener((entry: ILogEntry) => {
      entry.data.response.clone().json().then((error: any) => {
        window.postMessage(JSON.stringify({
          function: functionName,
          success: false,
          result: null,
          errorMessage: error.error.message.value,
          source: 'chrome-sp-editor',
        }), '*')
      })
    })
    $pnp.log.subscribe(listener)
    /* *** */

    const postMessage = () => {
      window.postMessage(JSON.stringify({
        function: functionName,
        success: true,
        result: [],
        errorMessage: '',
        source: 'chrome-sp-editor',
      }), '*')
    }

    // site collection scope
    if (scope === 2) {
      // check that uca exists in site
      $pnp.sp.site.userCustomActions.getById(id).get().then(uca => {
        // update uca if exists
        if (uca && uca.Id) {
          $pnp.sp.site.userCustomActions.getById(id).update(payload).then(postMessage)
        } else {
          // uca did not exists in site, so scope must have been switched
          // so lets remove it from web
          $pnp.sp.web.userCustomActions.getById(id).delete().then(res => {
            // and then add it to site
            $pnp.sp.site.userCustomActions.add(payload).then(postMessage)
          })
        }
      })
    // web scope
    } else {
      // check that uca exists in web
      $pnp.sp.web.userCustomActions.getById(id).get().then(uca => {
        // update uca if exists
        if (uca && uca.Id) {
          $pnp.sp.web.userCustomActions.getById(id).update(payload).then(postMessage)
        } else {
          // uca did not exists in web, so scope must have been switched
          // so lets remove it from site
          $pnp.sp.site.userCustomActions.getById(id).delete().then(res => {
            // and then add it to web
            $pnp.sp.web.userCustomActions.add(payload).then(postMessage)
          })
        }
      })
    }
  })
}
