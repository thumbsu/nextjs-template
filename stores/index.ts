import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper'
import { AnyAction, applyMiddleware, createStore, Middleware } from 'redux'
import logger from 'redux-logger'

export interface IState {
  tick: string
}

const reducer = (state: IState = { tick: 'init' }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case 'TICK':
      return { ...state, tick: action.payload }
    default:
      return state
  }
}

const makeStore: MakeStore<IState> = () => createStore(reducer, applyMiddleware(logger))

export const wrapper = createWrapper<IState>(makeStore, { debug: true })
