// Import System requirements
import Vue from 'vue'
import App from './App'
import VueProgressBar from 'vue-progressbar'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

// Resource logic
Vue.use(Resource)
Vue.use(VueRouter)

//--Progress Bar
const options = {
  color: 'green',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.1s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
   el: '#app',
   router,
   render: h => h(App)
});
