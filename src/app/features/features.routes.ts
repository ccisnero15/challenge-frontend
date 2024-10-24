import { Route } from '@angular/router'
import { hasRolesGuard } from '../core/guards/has-roles.guard'

export default [
    {
        path: '',
        loadComponent: () => import('./features.component').then((c) => c.FeaturesComponent),
        children: [
            { path: 'posts', title: 'Posts', loadComponent: () => import('./pages/posts/posts.component') },
            { path: 'users', title: 'Users', loadComponent: () => import('./pages/users/users.component'), canActivate: [hasRolesGuard] },
            { path: '**', redirectTo: 'posts' },
        ],
    },
] satisfies Route[]
