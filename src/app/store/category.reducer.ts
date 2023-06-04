import { createReducer, on } from '@ngrx/store';
import { Category, product } from '../category.model';
import { loadCategoriesSuccess,loadProductDataSuccess } from './category.actions';

export interface CategoryState {
  categories: Category;
  loading: boolean;
  error: string | null;
}


export interface productState {
   product: product;
  loading: boolean;
  error: string | null;
}
export const initialCategoryState: CategoryState = {
  categories:{
    limit:0,
  products: [],
  skip:0,
  total: 0,
  active:false,
  length:0
  },
  loading: false,
  error: null
};

export const initialProductState: productState = {
  product:{
    limit:0,
  products: [],
  skip:0,
  total: 0,
  active:false,
  length:0
  },
  loading: false,
  error: null
  
   
};

export const categoryReducer = createReducer(
  initialCategoryState,
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories
  })),
  on(loadProductDataSuccess, state => ({ ...state, loadProductData: true, error: null })),
);


export const ProductReducer = createReducer(
  initialProductState,
  on(loadProductDataSuccess, (state, { product }) => ({
    ...state,
    product
  })),
  on(loadProductDataSuccess, state => ({ ...state, loadProductData: true, error: null })),
);