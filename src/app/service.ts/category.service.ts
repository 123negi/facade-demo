import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories  = 'https://dummyjson.com/product';
  private Products  = 'https://dummyjson.com/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.categories);
  }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.Products);
  }

}
