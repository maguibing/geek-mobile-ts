import { ThunkAction } from 'redux-thunk'
import store from '@/store'

// 项目中所有action的类型
type RootAction = unknown

export type RootState = ReturnType<typeof store.getState>
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>
