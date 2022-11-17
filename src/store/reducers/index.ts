import { combineReducers } from 'redux'
import { login } from './login'
import { getUser } from './profile'

const rootReduces = combineReducers({
	login,
	getUser,
})

export default rootReduces
