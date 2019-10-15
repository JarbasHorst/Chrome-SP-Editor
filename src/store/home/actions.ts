import { action } from 'typesafe-actions'
import { Constants } from './types'

export function addItemToList(item: string) {
  return action(Constants.ADD_ITEM, {
    item,
  })
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
  })
}

export function setDarkMode(isDark: boolean) {
  return action(Constants.SET_DARK_MODE, {
    isDark,
  })
}

export function setError(error: boolean) {
  return action(Constants.SET_ERROR, {
    error,
  })
}

export function setErrorMessage(errorMessage: string) {
  return action(Constants.SET_ERROR_MESSAGE, {
    errorMessage,
  })
}
