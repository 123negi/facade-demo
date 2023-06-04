import { Category, product } from '../category.model';
import { ProductReducer, categoryReducer } from './category.reducer';

export interface CategoryState {
  categories: Category;
}

export interface productState {
   product:  product;
}


export const appReducer = {
  category: categoryReducer,
  product :ProductReducer
}
