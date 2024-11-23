import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/experience',
            name: 'Experience',
            component: () => import('@/views/ExperienceView.vue')
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import('@/views/ProjectView.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('@/views/ContactView.vue')
        },
    ]
})

export default router
