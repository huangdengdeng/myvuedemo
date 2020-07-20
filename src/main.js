// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import { Button, Select, Input, Option,Table, TableColumn} from 'element-ui';
// const Page11 = () => import('@/views/page11')
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.component(Input.name, Input);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Option.name, Option);
// Vue.component(Table.name, Table);
// Vue.component(TableColumn.name, TableColumn);
Vue.use(ElementUI, { locale })
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YO3RAFalbVF3yFGGwM3UDaCtuHIq0ev3'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
