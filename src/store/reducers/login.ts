import { Token } from '@/types/data'
import { loginAction } from '@/types/store'
import { getToken } from '@/utils/storage'

const initial: Token = getToken()

export const login = (state = initial, action: loginAction): Token => {
    if (action.type === 'login/login') {
        return action.payload
    }
    return state
}
