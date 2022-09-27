import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }
 
  createProduct(productBody: any){
   const baseUrl="http://localhost:4000/product";
   return this.httpClient.post(baseUrl, productBody)
  }

  viewProduct(productId: any){
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.get(baseUrl)
  }

  updateProduct(productId: any, productBody: any){
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.put(baseUrl, productBody)
  }

  deleteProduct(productId: any){
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.delete(baseUrl)
  }

  searchCategoryProduct(categoryId: any){
   const baseUrl="http://localhost:4000/product/category"+categoryId;
   return this.httpClient.get(baseUrl)
  }

  searchDateProduct(dateParam: any){
   const baseUrl="http://localhost:4000/product/date"+dateParam;
   return this.httpClient.get(baseUrl)
  }

}
