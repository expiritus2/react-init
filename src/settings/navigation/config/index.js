import { Main, NotFound } from 'pages';
import { routes } from '../routes';

export default [
    { path: routes.index, component: Main, exact: true },
    { path: '*', component: NotFound },
];
