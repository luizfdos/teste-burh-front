import Vue from 'vue';
import VueRouter from 'vue-router';

import ShowTeachers from '../components/ShowTeachers.vue';
import Main from '../components/Main.vue';
import CreateTeacher from '../components/CreateTeacher.vue';
import TeacherDetails from '../components/TeacherDetails.vue';
import EditTeacher from '../components/EditTeacher.vue';
import NotFound from '../components/NotFound.vue';

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
        {
          path: '/teacher/:id',
          component: TeacherDetails,
        },
        {
          path: '/teacher/edit/:id',
          component: EditTeacher,
        },
        {
          path: '/:pathMatch(.*)*',
          component: NotFound,
        },
      ],
    },

  ],
  mode: 'history',
});
