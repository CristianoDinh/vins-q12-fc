import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'en',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: '',
    redirectTo: '/en',
    pathMatch: 'full',
  },
  { path: '**',
    redirectTo: '/en'
  }
];
