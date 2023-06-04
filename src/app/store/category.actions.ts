import { createAction, props } from '@ngrx/store';
import { Category, product } from '../category.model';

export const loadCategories = createAction('[Category] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category }>()
);

export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: string }>()
);

export const loadProductData = createAction('[Item] Load Second Data');
export const loadProductDataSuccess = createAction('[Item] Load Second Data Success', props<{  product:  product  }>());
export const loadProductDataFailure = createAction('[Item] Load Second Data Failure', props<{ error: string }>());