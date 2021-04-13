import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("/@/views/home/index.vue"),
    beforeEnter:(to,form,next)=>{
      console.log("将进入首页了！！")
      next()
    }
  },
  {
    path:'/other',
    component:()=>import('/@/views/other/index.vue'),
    beforeEnter:(to,form,next)=>{
      console.log("将进入other页了！！")
      next()
    }
  },
  {
    path:"/other/detail/:id?",
    component: () => import('/@/other/detail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next)=>{
  console.log("调用全局前置守卫,顺序为：2")
  if(to.meta.hideMenu){
    // do something
  }
  next()
})

router.beforeResolve(()=>{
console.log("全局beforeResolve")
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})

export default router;
