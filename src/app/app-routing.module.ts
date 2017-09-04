import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'sales', component: CustomerListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
