import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SkinAestheticDetail from '../views/SkinAestheticDetail.vue'
import DentalDetail from '../views/DentalDetail.vue'
import TreatmentDetail from '../views/TreatmentDetail.vue'
import Career from '../views/Career.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/skin-aesthetic',
        name: 'SkinAesthetic',
        component: SkinAestheticDetail
    },
    {
        path: '/dental',
        name: 'Dental',
        component: DentalDetail
    },
    {
        path: '/treatment/:id',
        name: 'TreatmentDetail',
        component: TreatmentDetail
    },
    {
        path: '/career',
        name: 'Career',
        component: Career
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { top: 0 }
        }
    }
})

export default router
