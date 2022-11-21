import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
        sagaMiddleware,
    ],
})

sagaMiddleware.run(rootSaga)

export default store
