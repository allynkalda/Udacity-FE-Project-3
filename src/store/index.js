import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export default initializeStore
