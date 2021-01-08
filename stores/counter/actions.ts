import type { Dispatch } from 'redux'

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './types'

export const incrementCounter = (count: number) => (dispatch: Dispatch) => {
  const nextCount = count + 1

  return dispatch({
    type: INCREMENT_COUNTER,
    payload: nextCount,
  })
}

export const decrementCounter = (count: number) => (dispatch: Dispatch) => {
  const nextCount = count - 1

  return dispatch({
    type: DECREMENT_COUNTER,
    payload: nextCount,
  })
}
