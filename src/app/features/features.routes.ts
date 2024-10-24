import { Route } from '@angular/router'

export default [
    {
        path: '',
        loadComponent: () => import('./features.component').then((c) => c.FeaturesComponent),
        children: [
            { path: 'posts', title: 'Posts', loadComponent: () => import('./pages/posts/posts.component') },
            { path: '**', redirectTo: 'posts' },
        ],
    },
] satisfies Route[]
