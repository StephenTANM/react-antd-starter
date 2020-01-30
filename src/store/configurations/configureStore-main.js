import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'
import middleware from '../middleware/middleware'
import rootsaga from '../sagas/root.sagas'
import createSagaMiddleware from 'redux-saga'
import User from '../reducers/user.reducers'
import Ui from '../reducers/ui.reducers'

const persistConfig = {
  version: 0,
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
  timeout: null
  // migrate: createMigrate(migrations, { debug: true })
}
const loggerOptions = {
  // diff: true
}

export default () => {
  const allreducers = combineReducers({
    User,
    Ui
  })
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger(loggerOptions)
  const persistedReducer = persistReducer(persistConfig, allreducers)

  const store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk, middleware, logger, sagaMiddleware)
  )
  sagaMiddleware.run(rootsaga)

  const persistor = persistStore(store)
  return {
    store,
    persistor
  }
}