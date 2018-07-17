import Vue from 'vue'

import d2Container from '@/components/core/d2-container/index.vue'

Vue.component('d2-container', d2Container)

Vue.component('d2-icon', () => import('@/components/core/d2-icon'))
Vue.component('d2-page-cover', () => import('@/components/core/d2-page-cover'))
