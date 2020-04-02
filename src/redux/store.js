import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


let middleware = []

if (process.env.NODE_ENV === 'production') {
  middleware = [ thunk ]
}
else {
  middleware = [ thunk, logger ]
}

export const store = createStore(rootReducer,applyMiddleware(thunk))
