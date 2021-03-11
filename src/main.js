import Vue from 'vue'
import _ from 'lodash';
import App from './app.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import * as VueGoogleMaps from 'vue2-google-maps'
import 'element-ui/lib/theme-chalk/index.css';



// import './assets/style/main.css'
import './styles/styles.scss'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDM8_TlGWRdgfpzrFDSxN3qufpliVAKpQk',
    libraries: 'places',
  },
})

Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
