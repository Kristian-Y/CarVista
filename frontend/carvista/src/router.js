import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
    { path: '/', component: Home, name: "Home" },
    //{ path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;