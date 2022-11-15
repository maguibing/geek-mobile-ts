import { ApiResponse, loginForm, Token } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'
import { setToken } from '@/utils/storage'

/**
 * 登录action
 * @param data
 * @returns
 */
export const login = (data: loginForm): RootThunkAction => {
    return async dispatch => {
        const res = await request.post<ApiResponse<Token>>('/authorizations', data)
        setToken(res.data.data)
        dispatch({ type: 'login/login', payload: res.data.data })
    }
}

/**
 * 获取验证码
 * @param mobile
 * @returns
 */
export const getCode = (mobile: string): RootThunkAction => {
    return async dispatch => {
        await request.get(`/sms/code/${mobile}`)
    }
}
