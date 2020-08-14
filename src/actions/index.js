import { createAction } from 'redux-actions';

export const productDelete = createAction('products/delete');
export const productAdd = createAction('products/add');
export const productAddProductAsync = createAction('products/addProductAsync');