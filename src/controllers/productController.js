import Product from '../models/productModel';
import { productSchema } from '../validators/productValidator';

export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      });
    }

    const product = await Product.create(req.body);
    return res.status(201).json({
      message: 'Product Created',
      data: Product
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: 'Success', data: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Success', data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Success', data: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    res.status(200).json({
      message: 'Success',
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
// Add other CRUD operations as needed
