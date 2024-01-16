import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ProjectsIndex from './pages/project/Index.vue'
import Contacts from './components/Contacts.vue'
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
                path: '/contacts',
                name: 'contacts',
                component: Contacts,
            },
        ],
})

export { router }
