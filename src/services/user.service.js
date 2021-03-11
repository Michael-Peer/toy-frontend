import { httpService } from "./http.service"


export const userService = {
    loginUser,
    signupUser
}

function loginUser(user) {
    return httpService.post('auth/login/', user)
}

function signupUser(user) {
    return httpService.post('auth/signup/', user)
}