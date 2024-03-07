import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由配置
const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    children: [
      {
        path: 'namelogin',
        component: () => import('../components/NameLogin.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'numberlogin',
        component: () => import('../components/NumberLogin.vue'),
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
    children: [
      {
        path: 'nameregister',
        component: () => import('../components/NameRegister.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'numberregister',
        component: () => import('../components/NumberRegister.vue'),
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'user',
        component: () => import('../views/User.vue')
      },
      {
        path: 'decoration',
        component: () => import('../views/Decoration.vue')
      },
      {
        path: 'productm',
        component: () => import('../views/Productm.vue')
      },
      {
        path: 'memberm',
        component: () => import('../views/Memberm.vue')
      },
      {
        path: 'orderm',
        component: () => import('../views/Orderm.vue')
      },
      {
        path: 'couponm',
        component: () => import('../views/Couponm.vue')
      },
      {
        path: 'marketm',
        component: () => import('../views/Marketm.vue')
      },
      {
        path: 'distributionm',
        component: () => import('../views/Distributionm.vue')
      },
      {
        path: 'moneym',
        component: () => import('../views/Moneym.vue')
      },
      {
        path: 'shopm',
        component: () => import('../views/Shopm.vue')
      },
      {
        path: 'integralm',
        component: () => import('../views/Integralm.vue')
      },
      {
        path: 'wxm',
        component: () => import('../views/Wxm.vue')
      },
      {
        path: 'shpos',
        component: () => import('../views/Shpos.vue')
      },
      {
        path: 'systemm',
        component: () => import('../views/Systemm.vue')
      },
      {
        path: 'smonitor',
        component: () => import('../views/Smonitor.vue')
      },
      {
        path: 'stool',
        component: () => import('../views/Stool.vue')
      }
    ]
  }
]
// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
