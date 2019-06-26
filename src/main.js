import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    en: {
      home: {
        title: 'Explore the power of life',
        subtitle: 'Enabling biomedical innovation with information technology',
        footer: 'All rights reserved © Beijing Syngentech Co., LTD.'
      },
      ...enLocale
    },
    zh: {
      home: {
        title: '探索生命的力量',
        subtitle: '用信息技术赋能生物医药创新',
        footer: '版权所有 © 北京合生基因科技有限公司 · 京ICP备14043945号'
      },
      ...zhLocale
    }
  }
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
