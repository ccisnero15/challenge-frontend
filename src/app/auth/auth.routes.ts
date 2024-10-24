import { Route } from '@angular/router'
import { AuthComponent } from './auth.component'

export default [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                title: 'Login',
                loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
            },
            { path: '**', redirectTo: 'login' }, //TODO: Definir si se agrega un NotFound para rutas desconocidasrega un NotFound para rutas desconocidas
        ],
    },
] satisfies Route[]
