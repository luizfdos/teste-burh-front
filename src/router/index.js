import Vue from 'vue';
import VueRouter from 'vue-router';

import ShowTeachers from '../components/ShowTeachers.vue';
import Main from '../components/Main.vue';

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/teachers',
          component: ShowTeachers,
        },
      ],
    },
  ],
  mode: 'history',
});
