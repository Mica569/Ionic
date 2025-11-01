import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          { path: '', loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page) },
          { path: 'noticia/:id', loadComponent: () => import('../tab1/noticia-detalle.page').then((m) => m.NoticiaDetallePage) },
        ],
      },
      {
        path: 'clima',
        children: [
          { path: '', loadComponent: () => import('../tab2/tab2.page').then((m) => m.Tab2Page) },
         // { path: 'ciudad/:nombre', loadComponent: () => import('../tab2/ciudad-detalle.page').then((m) => m.CiudadDetallePage) },
        ],
        
      },
      {
        path: 'deportes',
        children: [
          { path: '', loadComponent: () => import('../tab3/tab3.page').then((m) => m.Tab3Page) },
          { path: 'articulo/:id', loadComponent: () => import('../tab3/articulo-detalle.page').then((m) => m.ArticuloDetallePage) },
        ],
      },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
];
