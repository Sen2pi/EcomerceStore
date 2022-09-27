import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { from , Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }
 
  createProduct(productBody: any):Observable<Product>{
   const baseUrl="http://localhost:4200/product";
   return this.httpClient.post<Product>(baseUrl, productBody)
  }

  viewProduct(productId: string):Observable<Product>{
   const baseUrl="http://localhost:4200//product/"+productId;
   return this.httpClient.get<Product>(baseUrl)
  }

  updateProduct(productId: string, productBody: any):Observable<Product>{
   const baseUrl="http://localhost:4200/product/"+productId;
   return this.httpClient.put<Product>(baseUrl, productBody)
  }

  deleteProduct(productId: string):Observable<Product>{
   const baseUrl="http://localhost:4200/product/"+productId;
   return this.httpClient.delete<Product>(baseUrl)
  }

  searchCategoryProduct(categoryId: string):Observable<Product>{
   const baseUrl="http://localhost:4200/product/category"+categoryId;
   return this.httpClient.get<Product>(baseUrl)
  }

  searchDateProduct(dateParam: string):Observable<Product>{
   const baseUrl="http://localhost:4200/product/date"+dateParam;
   return this.httpClient.get<Product>(baseUrl)
  }

  getCategory(){
    const categoryUrl="http://localhost:4200/categories";
   return this.httpClient.get<Category>(categoryUrl)
  }

}
