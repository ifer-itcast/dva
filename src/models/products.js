import { products } from '../services';

export default {
    namespace: 'products',
    state: [],
    reducers: {
        'init'(state, { payload }) {
            return [...payload];
        }
    },
    effects: {
        *getProducts(action,{ call, put }) {
            const { data } = yield call(products.getProducts);
            yield put({ type: 'init', payload: data } );
        },
        *deleteProduct({ payload }, { call, put }) {
            const { data } = yield call(products.deleteProduct, payload);
            yield put({ type: 'init', payload: data } );
        }
    }
}