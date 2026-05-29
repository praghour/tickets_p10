import { createRouter, createWebHistory } from "vue-router";
import auth from "../views/auth.vue";

import notFound from "../views/notFound.vue";

const routes = [
    {path: '/auth', component: auth, name: 'auth'},

    {path: '/:pathMatch(.*)*', component: notFound, name: 'notFound'}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});