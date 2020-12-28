import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import postsReducer from './reducer/postsReducer'
import filterReducer from './reducer/filterRerducer'
import thunk from 'redux-thunk'


const reducer = combineReducers ({
    posts : postsReducer,
    filter : filterReducer
})
  const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
  )
  
  export default store;