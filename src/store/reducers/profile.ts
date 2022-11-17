import { User } from '@/types/data'
import { profileAction } from '@/types/store'

type ProfileState = {
	user: User
}

const initial = {
	user: {},
} as ProfileState

export const getUser = (state = initial, action: profileAction): ProfileState => {
	if (action.type === 'profile/getUser') {
		return {
			...state,
			user: { ...action.payload },
		}
	}
	return state
}
