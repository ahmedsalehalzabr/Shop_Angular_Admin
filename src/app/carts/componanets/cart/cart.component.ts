import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import 'bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
constructor(private service:CartsService , private build:FormBuilder , private productsServices:ProductsService) {}
carts:any[] = [];
products:any[] = [];
total:any = 0;
form!:FormGroup;
details: any;
showDialog = false;
ngOnInit(): void {
  this.form = this.build.group({
    start: [""],
    end:[""]
  })
 this.getAllCarts()
}
getAllCarts(){
  this.service.getAllCarts().subscribe((res:any) =>{
    this.carts = res
  })
}
applyFilter() {
  let data = this.form.value
  this.service.getAllCarts().subscribe((res:any) =>{
    this.carts = res
  })
}
deletCart(id:number) {
  this.service.deletCart(id).subscribe(res => {
   this.getAllCarts()
    alert("Cart deleted success")
  })
}
view(index:number) {
  this.products = []
this.details = this.carts[index]
for(let x in this.details.products) {
  this.productsServices.getProductsById(this.details.products[x].productId).subscribe(res => {
    this.products.push({item:res , quantity:this.details.products[x].quantity})
  })
}
console.log(this.details)
}

}