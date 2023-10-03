import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories') 
  }
  getProductsByCategory(Keyword:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+Keyword) 
  }
  getProductsById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id) 
  }
  createProduct(model:any) {
    return this.http.post('https://fakestoreapi.com/products' , model)
  }
}
//export const enviroment ={
 // prodction : false,
  // busAPi :"https://fakestoreapi.com/",}
