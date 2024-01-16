import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ProjectsIndex from './pages/project/Index.vue'
import ProjectsShow from './pages/project/Show.vue'
import Contacts from './components/Contacts.vue'
import NotFound from './pages/404.vue'


const router = createRouter({
    history:createWebHistory(),
        routes:[
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/projects',
                name: 'projects.index',
                component: ProjectsIndex,
            },
            {
                path: '/projects/:slug',
                name: 'projects.show',
                props: true,
                component: ProjectsShow,
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: Contacts,
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound,
            }
        ],
})

export { router }
