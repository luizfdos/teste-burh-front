import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask';
import App from './App.vue';
import router from './router';

Vue.use(VueMask);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
