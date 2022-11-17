import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token, User } from './data'

export type RootState = ReturnType<typeof store.getState>

// 所有action的类型
export type RootAction = loginAction | profileAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type loginAction = {
	type: 'login/login'
	payload: Token
}

export type profileAction = {
	type: 'profile/getUser'
	payload: User
}
