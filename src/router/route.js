import { createRouter, createWebHistory } from "vue-router";
import auth from "../views/auth.vue";
import status from "../views/status.vue";
import profile from "../views/profile.vue";
import openShift from "../views/openShift.vue";

import notFound from "../views/notFound.vue";

const routes = [
    {path: '/auth', component: auth, name: 'auth'},
    {path: '/status', component: status, name: 'status'},
    {path: '/profile', component: profile, name: 'profile'},
    {path: '/open-shift', component: openShift, name: 'openShift'},

    {path: '/:pathMatch(.*)*', component: notFound, name: 'notFound'}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});