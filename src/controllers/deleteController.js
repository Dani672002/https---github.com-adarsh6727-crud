// delet.js

const Product = require('../models/productmodels');

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);
        if (!products) {
            return res.status(500).json({ message: `Cannot find the product by id ${id}` });
        }
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = deleteProduct;
