import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import Reducres from './reducers'

const middleWares = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(Reducres, middleWares)

export default store
