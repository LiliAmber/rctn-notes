// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import { init } from "@rematch/core";
import { base } from "./models/base";
import { movies } from "./models/movies";

// import baseReducer from './reducers/baseReducer'

// const enhancer = applyMiddleware(thunk)
// const reducers = combineReducers({
//   baseReducer
// })

// const store = createStore(reducers, enhancer)

const store = init({
  models: { base, movies }
});

export default store
