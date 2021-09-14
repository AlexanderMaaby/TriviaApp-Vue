import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home";
import Quiz from "@/views/Quiz";
import Results from "@/views/Results";

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    components: Home
    },
    {
        path: '/quiz',
        components: Quiz
    },
    {
        path: '/results',
        components: Results
    },
]

export default new VueRouter({routes})