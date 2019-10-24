import Vue from 'vue'
import App from './App.vue'
import ELEMENT from 'element-ui'

Vue.config.productionTip = false

Vue.use(ELEMENT)

new Vue({
  render: h => h(App),
}).$mount('#app')
