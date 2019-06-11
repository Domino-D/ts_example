import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const NODE_ENV = process.env.NODE_ENV
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let enhancer
if (NODE_ENV === 'development') {
  enhancer = composeEnhancers(
    applyMiddleware(thunk)
  )
} else {
  enhancer = applyMiddleware(thunk)
}

const store = createStore(
  reducers,
  enhancer,
)

export default store