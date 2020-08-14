export default {
    namespace: 'products',
    state: [
        { key: 1, name: 'ifer', id: 1 },
        { key: 2, name: 'elser', id: 2 },
    ],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        }
    }
}