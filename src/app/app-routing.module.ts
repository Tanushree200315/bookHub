import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CartComponent } from './component/cart/cart.component';
import { OrdersComponent } from './component/orders/orders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { BestsellerComponent } from './component/bestseller/bestseller.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: '', 
  component: HomeComponent 
   },
  { path: 'dashboard',
   component: DashboardComponent 
  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: 'orders',
    component:OrdersComponent
  },
  {
    path: 'wishlist',
    component:WishlistComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'bestseller',
    component:BestsellerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
