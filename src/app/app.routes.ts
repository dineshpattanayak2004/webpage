import { Routes } from '@angular/router';
import{ Dashboard } from './components/dashboard/dashboard';
import{ Services } from './components/services/services';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact }
];
