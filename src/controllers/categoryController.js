import CategoryModel from '../models/CategoryModel';
import categoryValidator from '../validators/categoryValidator';


export const create = async (req, res) => {
  try {
    const { error } = categoryValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      });
    }

    const categorys = await CategoryModel.create(req.body);
    return res.status(201).json({
      message: 'Product Created',
      data: CategoryModel
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
    const categorys = await CategoryModel.find();
    res.status(200).json({ message: 'Success', data: categorys });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const categorys = await CategoryModel.findById(req.params.id);
    if (!categorys) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Success', data: categorys });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Success', data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        message: 'Category not found'
      });
    }
    res.status(200).json({
      message: 'Success',
      data: deleted
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
// Add other CRUD operations as needed
