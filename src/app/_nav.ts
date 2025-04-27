import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    icon: 'cil-home'
  },
  {
    title: true,
    name: 'Usuarios y Roles'
  },
  {
    name: 'Usuarios',
    url: '/dashboard/setup/usuarios',
    icon: 'cil-user'
  },
  {
    name: 'Roles',
    url: '/dashboard/setup/roles',
    icon: 'cil-shield-alt'
  },
  {
    title: true,
    name: 'Servicios'
  },
  {
    name: 'Proveedores',
    url: '/dashboard/setup/proveedores',
    icon: 'cil-building'
  },
  {
    name: 'Servicios',
    url: '/dashboard/setup/servicios',
    icon: 'cil-briefcase'
  },
  {
    title: true,
    name: 'Sesión'
  },
  {
    name: 'Cerrar sesión',
    url: '/logout',
    icon: 'cil-account-logout'
  }
];
