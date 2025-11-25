import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SkinAestheticDetail from '../views/SkinAestheticDetail.vue'
import DermatologyDetail from '../views/DermatologyDetail.vue'
import DentistryDetail from '../views/DentistryDetail.vue'

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
        path: '/dermatology',
        name: 'Dermatology',
        component: DermatologyDetail
    },
    {
        path: '/dentistry',
        name: 'Dentistry',
        component: DentistryDetail
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
