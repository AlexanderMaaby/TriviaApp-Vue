import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home";
import Quiz from "@/views/Quiz";
import Results from "@/views/Results";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/quiz",
        component: Quiz
    },
    {
        path: "/results",
        component: Results
    },
    {
        path: "*",
        component: Home
    }
];

const mode = "history";

export default new VueRouter({routes, mode})