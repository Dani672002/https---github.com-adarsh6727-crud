// post.js

const Product = require('../models/productmodels');

const createProduct = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        console.log(products);
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = createProduct;
