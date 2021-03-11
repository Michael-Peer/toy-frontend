import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        user: null
    },
    getters: {
        isAdmin(state) { return state.user ? state.user.isAdmin : null },
        username(state) { return state.user.username}

    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        loginUser({ commit }, { user }) {
            userService.loginUser(user).then(user => commit({ type: 'setUser', user }))
        },
        signupUser({ commit }, { user }) {
            userService.signupUser(user => commit({ type: 'setUser', user }))
        }
    }
}