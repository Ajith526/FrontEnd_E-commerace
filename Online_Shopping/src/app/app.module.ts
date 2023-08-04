import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { LandingComponent } from './component/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { UpdateComponent } from './component/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderComponent } from './component/order/order.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    AboutComponent,
    CartComponent,
    LandingComponent,
    
    AddproductComponent,
    AdminpageComponent,
    UpdateComponent,
    OrderComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
