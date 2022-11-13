import store from '@/store'
import { ThunkAction } from 'redux-thunk'

export type RootState = ReturnType<typeof store.getState>

// 所有action的类型
export type RootAction = loginAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type loginAction = {
    type: 'login/login'
}
