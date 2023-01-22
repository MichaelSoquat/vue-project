import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/about.vue';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/about', name: 'About', component: About

    },
    {
        path: '/', name: 'Home', component: Home

    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
}
)

export default router;
