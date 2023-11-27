// controllers/productController.js
import Product from '../models/productModel';
import { productSchema } from '../validators/productValidator';

export const createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const data = await new Product(req.body).save();
    return res.status(201).json({
      message: 'Sản phẩm đã được tạo',
      data: data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Lỗi Nội Bộ của Server',
      error: err.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: 'Không tìm thấy sản phẩm nào!',
      });
    }

    return res.status(200).json({
      message: 'Lấy danh sách sản phẩm thành công!',
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Lỗi Nội Bộ của Server',
      error: error.message,
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    return res.status(200).json({ message: 'Thành công', data: product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi Nội Bộ của Server', error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    return res.status(200).json({ message: 'Thành công', data: updated });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi Nội Bộ của Server', error: error.message });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    return res.status(200).json({ message: 'Thành công', data: deleted });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi Nội Bộ của Server', error: error.message });
  }
};
