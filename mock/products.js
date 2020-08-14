const products = [
    { key: 1, name: '手机', id: 1 },
    { key: 2, name: '电脑', id: 2 }
];

// 以函数的形式进行，可以做一些更加灵活的处理（也可以直接写一个对象）
module.exports = {
    "GET /api/products": (req, res) => {
        res.send(products);
    },
    "GET /api/deleteProduct": (req, res) => {
        const idx = products.findIndex(item => item.id === req.query.id);
        products.splice(idx, 1);
        res.send(products);
    },
}