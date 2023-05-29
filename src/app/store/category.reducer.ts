import { createReducer, on } from '@ngrx/store';
import { Category } from '../category.model';
import { loadCategoriesSuccess } from './category.actions';

export interface CategoryState {
  categories: Category;
  loading: boolean;
  error: string | null;
}

export const initialCategoryState: CategoryState = {
  categories:{
    limit:0,
  products: [],
  skip:0,
  total: 0
  },
  loading: false,
  error: null
};

export const categoryReducer = createReducer(
  initialCategoryState,
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories
  }))
);
