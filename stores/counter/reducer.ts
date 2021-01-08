import { AnyAction } from 'redux'

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './types'

export interface ICountState {
  server: any
  client: any
  count: 0
}

const initialState: ICountState = {
  server: '',
  client: '',
  count: 0,
}

export default function reducer(state: ICountState = initialState, action: AnyAction) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: action.payload }
    case DECREMENT_COUNTER:
      return { ...state, count: action.payload }
    default:
      return state
  }
}
