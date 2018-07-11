import App from './components/App';
import Login from './components/Login';
import Registration from './components/Registration';
import Reestablish from './components/Reestablish';
import NotFound from './components/NotFound';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/registration',
        component: Registration,
      },
      {
        path: '/reestablish',
        component: Reestablish,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes;
