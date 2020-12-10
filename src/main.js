import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//axios will be sent here, and the information for the api will be sent to the Card to display.