import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent ,},
  { path: 'about', component: AboutComponent },
  { path:'customer', component:CustomerComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const appRouting = provideRouter(routes);
