import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LinesUpComponent} from './components/lines-up/lines-up.component';

export const routes: Routes = [
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
