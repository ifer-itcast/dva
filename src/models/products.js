import * as api from '../services/example';

export default {
    namespace: 'products',
    state: [
        { key: 1, name: 'ifer', id: 1 },
        { key: 2, name: 'elser', id: 2 },
    ],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
        'add'(state, action) {
            const newProducts = JSON.parse(JSON.stringify(state));
            newProducts.push(action.payload);
            return newProducts;
        }
    },
    effects: {
        *addProductAsync({ payload }, { call, put }) {
            const { data } = yield call(api.getProduct);
            yield put({ type: 'add', payload: data } );
        }
    }
}