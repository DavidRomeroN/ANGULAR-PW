import { Routes } from '@angular/router';
import { ServicioComponent } from './servicio/servicio.component';

export const routes: Routes = [
  {
    path: '',
    component: ServicioComponent,
    data: {
      title: 'Servicios'
    }
  }
];
