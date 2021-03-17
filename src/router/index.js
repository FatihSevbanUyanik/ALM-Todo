import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// todo
import Todo from '@/components/todo/Todo.vue';

const routes = [
   {
      path: '/',
      name: 'todo.index',
      component: Todo,
   },
];

const router = new VueRouter({ routes, mode: 'history' });
export default router;