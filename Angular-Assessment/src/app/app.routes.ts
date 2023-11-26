import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/users'
    // },
    {
        path: '',
        loadComponent: () => import('./users/users.component').then(c => c.UsersComponent)
    }
];
