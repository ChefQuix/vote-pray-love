import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import MeetingView from '../views/MeetingView.vue'
import HeadingView from '../views/HeadingView.vue'
import MotionsView from '../views/MotionsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/committee/:committee/:committee_name',
    name: 'committee',
    component: CommitteeView
  },
  {
    path: '/meeting/:meeting_id/:committee_name/:meeting_date',
    name: 'meeting',
    component: MeetingView
  },
  {
    path: '/meeting/:meeting_id/:committee_name/:meeting_date/:heading',
    name: 'heading',
    component: HeadingView
  },
  {
    path: '/meeting/:meeting_id/:committee_name/:meeting_date/:heading/:title',
    name: 'motions',
    component: MotionsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
