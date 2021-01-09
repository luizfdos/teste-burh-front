import Vue from 'vue';
import VueRouter from 'vue-router';

import ShowTeachers from '../components/ShowTeachers.vue';
import Main from '../components/Main.vue';
import CreateTeacher from '../components/CreateTeacher.vue';

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: ShowTeachers,
        },
        {
          path: '/create',
          component: CreateTeacher,
        },
      ],
    },
  ],
  mode: 'history',
});
