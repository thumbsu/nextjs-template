/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import counter from './counter/reducer'

const combinedReducer = combineReducers({
  counter,
})

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware, logger))
  }
  return applyMiddleware(...middleware)
}

const makeStore: MakeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return createStore(combinedReducer, bindMiddleware([thunk]))
  } else {
    const { persistStore, persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
      key: 'next',
      storage,
    }
    const persistedReducer = persistReducer(persistConfig, combinedReducer)

    const store = createStore(persistedReducer, bindMiddleware([thunk, logger]))
    // @ts-ignore
    store.__persistor = persistStore(store)

    return store
  }
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof combinedReducer>
