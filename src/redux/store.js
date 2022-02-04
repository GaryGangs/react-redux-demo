import { createStore, applyMiddleware } from "redux"
import { createEpicMiddleware } from "redux-observable"

import rootReducer from "./root-reducer"
import rootEpic from "./root-epic"

import ReduxThunk from "redux-thunk"

const epicMiddleware = createEpicMiddleware()

export const middlewares = [ReduxThunk, epicMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
epicMiddleware.run(rootEpic)

export default store
