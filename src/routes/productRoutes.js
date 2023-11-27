// routes/productRoutes.js
import express from 'express';
import {
  createProduct, getAllProducts, getOneProduct, removeProduct, updateProduct,
} from '../controllers/productController';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.put('/:id', updateProduct);
router.delete('/:id', removeProduct);

export default router;
