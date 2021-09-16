import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

import { Get, Post} from "./api/user-API";

export default new Vuex.Store({
    state: {
        user: null,
        error: null,
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getScoreOfUser: state => {
            if(state.user.highScore >= 0) {
                return state.user.highScore;
            }
            return state.user.score;
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
        async addUser({ commit }, username) {
            const [error, user] = await Post(username);
            commit("setUsers", user);
            commit("setError", error);
        }
    }
})