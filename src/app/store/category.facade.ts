import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from '../category.model';
import * as CategoryActions from '../store/category.actions';
import * as CategorySelectors from '../store/category.selectors';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  categories$: Observable<Category> = this.store.select(
    CategorySelectors.selectCategories
  );

  constructor(private store: Store) {}

  loadCategories() {
    this.store.dispatch(CategoryActions.loadCategories());
  }
}
