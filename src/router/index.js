import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/villages',
    name: 'Villages',
    component: () => import('@/views/VillagesView.vue'),
    meta: { title: '村落列表' }
  },
  {
    path: '/village/:id',
    name: 'VillageDetail',
    component: () => import('@/views/detail/ChaozhouGuchenView.vue'),
    props: true,
    meta: { title: '村落详情' }
  },
  {
    path: '/topics',
    name: 'Topics',
    component: () => import('@/views/TopicsView.vue'),
    meta: { title: '主题列表' }
  },
  {
    path: '/dialect',
    name: 'Dialect',
    component: () => import('@/views/topic/DialectView.vue'),
    meta: { title: '方言文化' }
  },
  {
    path: '/red-culture',
    name: 'RedCulture',
    component: () => import('@/views/topic/RedCultureView.vue'),
    meta: { title: '红色文化' }
  },
  {
    path: '/festival',
    name: 'Festival',
    component: () => import('@/views/topic/FestivalView.vue'),
    meta: { title: '节日文化' }
  },
  {
    path: '/food-culture',
    name: 'FoodCulture',
    component: () => import('@/views/topic/FoodCultureView.vue'),
    meta: { title: '饮食文化' }
  },
  {
    path: '/folk-culture',
    name: 'FolkCulture',
    component: () => import('@/views/topic/FolkCultureView.vue'),
    meta: { title: '民俗文化' }
  },
  {
    path: '/belief-culture',
    name: 'BeliefCulture',
    component: () => import('@/views/topic/BeliefCultureView.vue'),
    meta: { title: '信仰文化' }
  },
  {
    path: '/exhibitions',
    name: 'Exhibitions',
    component: () => import('@/views/ExhibitionsView.vue'),
    meta: { title: '展览展示' }
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import('@/views/ActivitiesView.vue'),
    meta: { title: '活动信息' }
  },
  {
    path: '/creations',
    name: 'Creations',
    component: () => import('@/views/CreationsView.vue'),
    meta: { title: '创意作品' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于我们' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面未找到' }
  },
  // 更新展览详情路由，使用动态导入
  {
    path: '/exhibitions/:id',
    name: 'ExhibitionDetail',
    component: () => import('@/views/exhibitions/Exhibition1.vue'), // 默认加载Exhibition1.vue
    props: (route) => {
      // 根据id动态选择组件
      const exhibitionId = parseInt(route.params.id);
      const componentMap = {
        1: () => import('@/views/exhibitions/Exhibition1.vue'),
        2: () => import('@/views/exhibitions/Exhibition2.vue'),
        3: () => import('@/views/exhibitions/Exhibition3.vue'),
        4: () => import('@/views/exhibitions/Exhibition4.vue'),
        5: () => import('@/views/exhibitions/Exhibition5.vue')
      };

      return {
        default: componentMap[exhibitionId] || componentMap[1], // 默认加载Exhibition1.vue
        component: componentMap[exhibitionId] || componentMap[1]
      };
    },
    meta: { title: '展览详情' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 滚动到顶部
    return savedPosition || { top: 0 }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 潮州文化数据库`
  } else {
    document.title = '潮州文化数据库'
  }
  next()
})

export default router
