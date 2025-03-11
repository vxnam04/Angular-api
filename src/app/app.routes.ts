import { Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { ServicesComponent } from './header/services/services.component';
import { ContactComponent } from './header/contact/contact.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'coupens',
    component: CoupensComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
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
