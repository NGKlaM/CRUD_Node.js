// routes/productRoutes.js
import express from 'express';
import {
  createProduct, getAllProducts, getOneProduct, removeProduct, updateProduct,
} from '../controllers/productController';
import { checkIsAdmin } from '../middlewares/checkisAdmin';
import { checkRequestBodyProduct } from '../middlewares/checkRequestBody';


const router = express.Router();

router.post('/',checkRequestBodyProduct,checkIsAdmin, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.put('/:id',checkRequestBodyProduct,checkIsAdmin, updateProduct);
router.delete('/:id',removeProduct);

export default router;
