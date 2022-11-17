export type loginForm = {
	mobile: string
	code: string
}

export type ApiResponse<T> = {
	message: string
	data: T
}

export type Token = {
	refresh_token: string
	token: string
}

export type User = {
	id: string
	name: string
	photo: string
	art_count: number
	follow_count: number
	fans_count: number
	like_count: number
}
