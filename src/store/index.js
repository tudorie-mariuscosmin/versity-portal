import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import userReducer from './user/user'
import postReducer from './post/post'
import universitiesReducer from './universities/universities'
import rootSaga from './rootSaga'

const reducer = combineReducers({
    user: userReducer,
    post: postReducer,
    universities: universitiesReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]

})

sagaMiddleware.run(rootSaga)



export default store;