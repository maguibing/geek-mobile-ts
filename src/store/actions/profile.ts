import { ApiResponse, User } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'

/**
 * 获取用户信息
 * @returns
 */
export const getUser = (): RootThunkAction => {
	return async dispatch => {
		const res = await request.get<ApiResponse<User>>(`/user`)
		dispatch({ type: 'profile/getUser', payload: res.data.data })
	}
}
