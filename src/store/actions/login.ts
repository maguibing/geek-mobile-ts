import { ApiResponse, loginForm, Token } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'

/**
 * 登录action
 * @param data
 * @returns
 */
export const login = (data: loginForm): RootThunkAction => {
    return async dispatch => {
        const res = await request.post<ApiResponse<Token>>('/authorizations', data)
        dispatch({ type: 'login/login', payload: res.data.data })
    }
}
