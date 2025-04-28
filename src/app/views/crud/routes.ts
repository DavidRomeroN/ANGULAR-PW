import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Crud'
    },
    children: [
      {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
      }
    ]
  }
];
