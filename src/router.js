import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Blank from '@/views/Blank.vue'
import Overview from '@/views/Overview.vue'
import Teammates from '@/views/Teammates.vue'
import Investors from '@/views/Investors.vue'
import Awards from '@/views/Awards.vue'
import Contact from '@/views/Contact.vue'
import Join from '@/views/Join.vue'
import News from '@/views/News.vue'
import Synbio from '@/views/Synbio.vue'
import Science from '@/views/Science.vue'
import Pipeline from '@/views/Pipeline.vue'
// import Clinical from '@/views/Clinical.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/blank',
    name: 'blank',
    component: Blank
  }, {
    path: '/overview',
    name: 'overview',
    component: Overview
  }, {
    path: '/teammates',
    name: 'teammates',
    component: Teammates
  }, {
    path: '/investors',
    name: 'investors',
    component: Investors
  }, {
    path: '/awards',
    name: 'awards',
    component: Awards
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }, {
    path: '/join',
    name: 'join',
    component: Join
  }, {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/synbio',
    name: 'synbio',
    component: Synbio
  }, {
    path: '/science',
    name: 'science',
    component: Science
  }, {
    path: '/pipeline',
    name: 'pipeline',
    component: Pipeline
  }, {
    path: '/clinical',
    name: 'clinical',
    component: Blank // Clinical
  }, {
    path: '/*',
    name: '404',
    beforeEnter: (to, _, next) => {
      window.location = to.params.pathMatch !== '404.html'
        ? '/404.html' // redirect to 404 page handled by Nginx
        : '/' // 404 not works, redirected to homepage
    }
  }].map((route) => Object.assign(route, { path: '/:locale(en|zh)?' + route.path }))
})
