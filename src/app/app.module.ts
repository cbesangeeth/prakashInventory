import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { ProductService } from './product/product-service';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [
    ProductService,
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
