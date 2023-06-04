import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category, product } from '../category.model';
import * as CategoryActions from '../store/category.actions';
import * as CategorySelectors from '../store/category.selectors';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  categories: Observable<Category> = this.store.select(
    CategorySelectors.selectCategories
  );
 
   product$: Observable<any> = this.store.select(
    CategorySelectors.selectProduct
  );
  constructor(private store: Store) {}

  loadCategories() {
    this.store.dispatch(CategoryActions.loadCategories());
  }

  loadCategoriesProduct() {
    this.store.dispatch(CategoryActions.loadProductData());
  }
}
