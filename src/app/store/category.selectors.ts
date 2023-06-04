import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState, productState } from './category.state';
import { product } from '../category.model';

export const selectCategoryState = createFeatureSelector<CategoryState>(
  'category'
);

export const selectProductState = createFeatureSelector<productState>(
  'product'
); 

export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);


export const selectProduct = createSelector(
  selectProductState,
  (state: productState) => state
);

 