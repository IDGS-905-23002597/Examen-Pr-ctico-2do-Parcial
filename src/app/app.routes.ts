import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'productos',
    component: ProductosComponent
  },

  {
    path: 'nosotros',
    component: NosotrosComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];