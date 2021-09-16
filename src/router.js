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
        path: "/question/:id",
        component: Quiz
    },
    {
        path: "/results",
        component: Results
    }
];

const mode = "history";

export default new VueRouter({routes, mode})