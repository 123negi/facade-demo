import { Category } from '../category.model';
import { categoryReducer } from './category.reducer';

export interface CategoryState {
  categories: Category;
}

export const appReducer = {
  category: categoryReducer,
}
