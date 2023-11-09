// patch.js

const Product = require('../models/productmodels');

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body)

        if (!products) {
            return res.status(404).json({ message: `Cannot find the product by id ${id}` });
        }
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = 
    updateProduct;
