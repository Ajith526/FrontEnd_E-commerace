import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';

import { CartComponent } from './component/cart/cart.component';



import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';

import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateComponent } from './component/update/update.component';



const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'about',component:AboutComponent},
  {path:'order',component:OrderComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'updateProduct',component:UpdateComponent},
  {path:'addProduct',component:AddproductComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
