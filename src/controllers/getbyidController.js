// getbyid.js

const Product = require('../models/productmodels');

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = 
    getProductById
;
