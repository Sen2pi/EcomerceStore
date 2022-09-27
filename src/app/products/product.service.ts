import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { from , Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }
 
  createProduct(productBody: any):Observable<Product>{
   const baseUrl="http://localhost:4000/product";
   return this.httpClient.post<Product>(baseUrl, productBody)
  }

  viewProduct(productId: string):Observable<Product>{
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.get<Product>(baseUrl)
  }

  updateProduct(productId: string, productBody: any):Observable<Product>{
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.put<Product>(baseUrl, productBody)
  }

  deleteProduct(productId: string):Observable<Product>{
   const baseUrl="http://localhost:4000/product/"+productId;
   return this.httpClient.delete<Product>(baseUrl)
  }

  searchCategoryProduct(categoryId: string):Observable<Product>{
   const baseUrl="http://localhost:4000/product/category"+categoryId;
   return this.httpClient.get<Product>(baseUrl)
  }

  searchDateProduct(dateParam: string):Observable<Product>{
   const baseUrl="http://localhost:4000/product/date"+dateParam;
   return this.httpClient.get<Product>(baseUrl)
  }

}
