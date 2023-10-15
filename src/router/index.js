import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import Base from '@/layouts/base.vue'
const router = createRouter({
    history: createWebHashHistory(), 
    routes:[
        {
          path: '/',
          name: 'Base',
          component: Base,
          redirect: '/Home',
          children: [
            {
              path: '/Home',
              name: 'Home',
              component: () =>
              import('@/views/Home/index.vue'),
            },
            {
              path: '/Marketplace',
              name: 'Marketplace',
              component: () =>
              import('@/views/Home/index.vue'),
            }
              
          ],
        },
      ]
})
 
export default router