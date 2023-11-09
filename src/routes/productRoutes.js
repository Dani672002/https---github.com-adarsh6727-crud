
const express = require('express');
const router = express.Router();
const getAllProducts = require('../controllers/getController'); 
const getProductById = require('../controllers/getbyidController'); 
const  createProduct = require('../controllers/postController'); 
const updateProduct = require('../controllers/patchController'); 
const deleteProduct = require('../controllers/deleteController');

router.get('/get' ,getAllProducts); 
router.get('/:id',getProductById);
router.post('/Product', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;

