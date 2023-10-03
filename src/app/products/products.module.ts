import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './componanets/all-product/all-product.component';
import { ProductsDetailsComponent } from './componanets/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './componanets/product/product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllProductComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductsModule { }
