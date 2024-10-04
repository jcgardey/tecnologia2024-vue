import { createRouter, createWebHistory } from 'vue-router';
import ToDo from '../components/ToDo.vue';
import EjemploReactividad from '../components/EjemploReactividad.vue';
import EjemploDirectivas from '../components/EjemploDirectivas.vue';
import Feriados from '../components/Feriados.vue';
import FeriadosYear from '../components/FeriadosYear.vue';
import EjemploDolares from '../components/EjemploDolares.vue';
import Productos from '../components/Productos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: ToDo,
    },
    {
      path: '/reactividad',
      name: 'reactividad',
      component: EjemploReactividad,
    },
    {
      path: '/directivas',
      name: 'directivas',
      component: EjemploDirectivas,
    },
    {
      path: '/feriados',
      name: 'feriados',
      component: Feriados,
    },
    {
      path: '/feriados_year',
      name: 'feriados_year',
      component: FeriadosYear,
    },
    {
      path: '/dolares',
      name: 'dolares',
      component: EjemploDolares,
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
    },
  ],
});

export default router;
