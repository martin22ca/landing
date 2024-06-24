// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/index.vue') },
  { path: '/julian', name: 'Julian', component: () => import('@/views/Julian.vue') },
  { path: '/life', name: 'LaVida', component: () => import('@/views/Life.vue') },
  { path: '/amistad', name: 'Amistad', component: () => import('@/views/Friends.vue') },
  { path: '/creador', name: 'Creador', component: () => import('@/views/Creator.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


/**
 * ,
  {
    path: '/puzzle1',
    name: 'puzzle1',
    component: () => import('@/views/Puzzle1.vue'),
  },
 */