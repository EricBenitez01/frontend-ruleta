import { createRouter, createWebHistory } from 'vue-router'
import Table from '../components/Table.vue'
import Form from '../components/Form.vue'
import Chips from '../components/Chips.vue'
import Users from '../services/User.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name:'Form' , component: Form},
        { path: '/table', name:'Fable' , component: Table },
        { path: '/chips', name:'Chips' , component: Chips },
        { path: '/user', name:'Chips' , component: Users }
    ]
});

/* const router = new VueRouter({
    routes // short for `routes: routes`
}) */

export default router;