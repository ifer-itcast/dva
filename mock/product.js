function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {
    "GET /api/product": (req, res) => {
        res.send({
            key: getRandom(1, 100000),
            name: getRandom(1, 100000),
            id: getRandom(1, 100000)
        });
    }
};
