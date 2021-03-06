import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

import { get, post, patch} from "./api/user-API";
import { getQuestions } from "./api/quiz-API";

export default new Vuex.Store({
    state: {
        user: null,
        error: null,
        quizTemplate:{
            difficulty: null,
            numberOfQuestions: 10,
            category: null
        },
        questions: null,
        currentScore: 0,
        answers: []
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
        },
        getQuizTemplate: state => {
            return state.quizTemplate;
        },
        getQuestions: state => {
            return state.questions;
        },
        getCurrentScore: state => {
            return state.currentScore;
        },
        getAnswers: state => {
            return state.answers;
        }
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user
        },
        setError: (state, error) => {
            state.error = error
        },
        setQuizDifficulty: (state, difficulty) => {
            state.quizTemplate.difficulty = difficulty
        },
        setQuizAmount: (state, amount) => {
            state.quizTemplate.numberOfQuestions = amount
        },
        setQuizCategory: (state, category) => {
            state.quizTemplate.category = category
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        },
        setQuizTemplate: (state, template) => {
            state.quizTemplate = template
        },
        setCurrentScore: (state, score) => {
            state.currentScore = score;
        },
        setAnswers: (state, answers) => {
            state.answers = answers;
        }
    },
    actions: {
        async fetchUser({ commit, }, username) {
            const [error, user] = await get(username);
            commit("setUser", user);
            commit("setError", error);
        },
        async addUser({ commit }, username) {
            const [error, user] = await post(username);
            commit("setUser", user);
            commit("setError", error);
        },
        async getQuestionsFromTemplate({commit, state}) {
            state.answers = [];
            const difficultyString = state.quizTemplate.difficulty ? `difficulty=${state.quizTemplate.difficulty}`: null;
            const categoryString = state.quizTemplate.category ? `category=${state.quizTemplate.category}` : null;

            const settings = () => {
                let setString = "";
                if(difficultyString) setString += `&${difficultyString.toLowerCase()}`;
                if(categoryString) setString += `&${categoryString.toLowerCase()}`;
                return setString;
            };
            const [error, questions] = await getQuestions(state.quizTemplate.numberOfQuestions, settings());
            commit("setError", error);
            commit("setQuestions", questions);
        },
        async updateUserWithNewScore({commit, state}) {
            const [error, userUpdated] = await patch(state.user, state.currentScore);
            console.log(userUpdated)
            console.log("REEEEE")
            commit("setError", error);
            commit("setUser", userUpdated);
        },
        addAnswer({commit}, answer) {
            commit("setAnswers", answer);
        },
        addCurrentScore({commit}, score) {
            commit("setCurrentScore", score);
        }
    }
})