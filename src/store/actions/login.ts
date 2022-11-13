import { loginForm } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'

export const login = (data: loginForm): RootThunkAction => {
    return async dispatch => {
        const res = await request.post('/authorizations', data)
        console.log(res)
    }
}
