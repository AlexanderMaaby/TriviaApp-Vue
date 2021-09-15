import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

import { Get, Post} from "./api/user-API";

export default new Vuex.Store({
    state: {
        user: {},
        error: ""
    },
    getters: {
        getUsers: state => {
            return state.user;
        }
    },
    mutations: {
        setUsers: (state, user) => {
            state.user = user
        },
        setError: (state, error) => {
            state.error = error
        }
    },
    actions: {
        async fetchUser({ commit }, username) {
            const [error, user] = await Get(username);
            commit("setUsers", user);
            commit("setError", error);
        },
        async addUser({commit}, username) {
            await Post(username);
        }
    }
})