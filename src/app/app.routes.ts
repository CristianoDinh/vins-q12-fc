import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {TeamComponent} from './components/team/team.component';

import {ComingSoonComponent} from './components/coming-soon/coming-soon.component';
import {ChatGPTComponent} from './components/chat-gpt/chat-gpt.component';
import {ContactUsComponent} from './components/footer/contact-us/contact-us.component';
import {AccessibilityComponent} from './components/footer/accessibility/accessibility.component';
import {PrivacyComponent} from './components/footer/privacy/privacy.component';
import {TermOfUseComponent} from './components/footer/term-of-use/term-of-use.component';
import {CookiesComponent} from './components/footer/cookies/cookies.component';
import {NewsCategoryComponent} from './components/news/news-category.component';
import {NewsDetailComponent} from './components/news/news-detail/news-detail.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    title: 'Test Component'
  },
  {
    path: 'chatgpt',
    component: ChatGPTComponent,
    title: 'ChatGPT'
  },

  // Offical
  {
    path: ':en',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Vins Q12 FC'
      },
      { path: 'team',
        component: TeamComponent,
        title: 'Squad | Vins-Q12 FC'
      },

      { path: 'news',
        component: NewsCategoryComponent,
        title: 'News | Vins-Q12 FC'
      },
      { path: 'news',
        redirectTo: '/news?scope=0',
        pathMatch: 'full'
      },
      { path: 'news/:id', component: NewsDetailComponent, title: 'News Detail' },
      {
        path: 'store',
        component: ComingSoonComponent,
        title: 'Store | Vins-Q12 FC'
      },
      {
        path: 'matches',
        component: ComingSoonComponent,
        title: 'Matches | Vins-Q12 FC'
      },
      // III. Footer - Policy
      {
        path: 'accessibility',
        component: AccessibilityComponent,
        title: 'Accessibility'
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
      },
      {
        path: 'privacy-policy',
        component: PrivacyComponent,
        title: 'Privacy Policy'
      },
      {
        path: 'terms-of-use',
        component: TermOfUseComponent,
        title: 'Terms of Use'
      },
      {
        path: 'cookie-policy',
        component: CookiesComponent,
        title: 'Cookie Policy'
      },
      { path: '**',
        redirectTo: ':en',
        pathMatch: 'full'
      },
    ]
  },
  { path: '',
    redirectTo: '/en',
    pathMatch: 'full'
  },
];
