import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectedComponent } from './components/protected/protected.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'precios', component: PriceComponent },
  { path: 'protegida', component: ProtectedComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
