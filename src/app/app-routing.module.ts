import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/componanets/all-product/all-product.component';
import { ProductsDetailsComponent } from './products/componanets/products-details/products-details.component';
import { CartComponent } from './carts/componanets/cart/cart.component';

const routes: Routes = [
  {path:"products" , component:AllProductComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path : "cart" , component:CartComponent},
  {path:"**" , redirectTo:"products" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
