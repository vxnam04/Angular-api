import { Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { ServicesComponent } from './header/services/services.component';
import { ContactComponent } from './header/contact/contact.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
];
