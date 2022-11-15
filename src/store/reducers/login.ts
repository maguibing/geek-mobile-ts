import { Token } from '@/types/data'
import { loginAction } from '@/types/store'

const initial: Token = {} as Token

export const login = (state = initial, action: loginAction): Token => {
    if (action.type === 'login/login') {
        return action.payload
    }
    return state
}
