import { Route } from '@angular/router'
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard'

export default [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
    },
    {
        path: '',
        loadChildren: () => import('./features/features.routes'),
        canActivate: [isAuthenticatedGuard],
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
] satisfies Route[]
