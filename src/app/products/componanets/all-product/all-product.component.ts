import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup;
  cartProducts:any[] = []
  constructor(private service:ProductsService, private build:FormBuilder) {}
    ngOnInit(): void {
      this.form = this.build.group({
        title:['',[Validators.required]],
        price:['',[Validators.required]],
        description:['',[Validators.required]],
        image:['',[Validators.required]],
        category:['',[Validators.required]],
      })
   this.getProducts()
   this.getCategories()
  }
  getProducts(){
    this.loading = true
    this.service.getAllProducts().subscribe ((res:any) => {
    this.products = res
    this.loading = false
    }, error =>{
      this.loading = false
      alert(error)
    })
  }
  getCategories(){
    this.loading = true
    this.service.getAllCategories().subscribe ((res:any) => {
    this.categories = res
    this.loading = false
    }, error =>{
      this.loading = false
      alert("Error")
    })
  }
  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)

  }
  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.base64 = reader.result;
        this.form.get('image')?.setValue(this.base64)
        console.log(this.base64)
  };
 
}
addProduct() {
  const model = this.form.value
  this.service.createProduct(model).subscribe(res => {
    alert("add product seccess")
  })
console.log(this.form)
}
update(item:any) {
  this.form.get('title')?.setValue(item.title)
  this.form.get('description')?.setValue(item.description)
  this.form.get('category')?.setValue(item.category)
  this.form.get('price')?.setValue(item.price)
  this.form.get('image')?.setValue(item.image)
  this.base64 = item.image
}
}