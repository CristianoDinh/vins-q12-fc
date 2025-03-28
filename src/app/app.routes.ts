import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {TeamComponent} from './components/team/team.component';
import {NewsAllComponent} from './components/news/news-all/news-all.component';

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
  {
    path: 'test',
    component: TestComponent,
    title: 'Test Component'
  },
  { path: 'team',
    component: TeamComponent,
    title: 'Squad | Vins-Q12 FC'
  },
  { path: 'team',
    redirectTo: '/team?scope=1',
    pathMatch: 'full'
  },

  { path: 'news',
    component: NewsAllComponent,
    title: 'News | Vins-Q12 FC'
  },
  { path: '**',
    redirectTo: '/en'
  },

];
