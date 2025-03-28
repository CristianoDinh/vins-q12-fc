import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';

export const routes: Routes = [
  {
    path: 'slide',
    component: TestComponent,
    title: 'Test Component'
  },
  {
    path: 'en',
    component: HomeComponent,
    title: 'Vins Q12 FC'
  },
  {
    path: '',
    redirectTo: '/en',
    pathMatch: 'full',
  },
  { path: '**',
    redirectTo: '/en'
  },

];
