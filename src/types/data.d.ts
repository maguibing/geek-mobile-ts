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
