import { createRouter, createWebHistory } from "vue-router";
import auth from "../views/auth.vue";
import main from "../views/main.vue";
import status from "../views/status.vue";

import notFound from "../views/notFound.vue";

const routes = [
    {path: '/auth', component: auth, name: 'auth'},
    {path: '/profile', component: main, name: 'main'},
    {path: '/status', component: status, name: 'status'},

    {path: '/:pathMatch(.*)*', component: notFound, name: 'notFound'}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});