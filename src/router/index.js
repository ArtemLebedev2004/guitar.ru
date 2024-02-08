import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyVideosView from '../views/MyVideosView.vue'
import MyVideoView from '../views/MyVideoView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/my_videos',
    name: 'myVideos',
    component: MyVideosView
  },
  {
    path: '/video',
    name: 'video',
    component: MyVideoView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
