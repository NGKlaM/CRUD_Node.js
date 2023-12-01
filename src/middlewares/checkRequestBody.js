import categoryValidator from "../validators/categoryValidator";
import { productSchema } from "../validators/productValidator";



export const checkRequestBodyCategory = async (req, res, next) => {
    try {
      const body = req.body;
  
      const { error } = categoryValidator.validate(body, { abortEarly: false });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      next();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: error.message,
      });
    }
  };

  export const checkRequestBodyProduct = async (req, res, next) => {
    try {
      const body = req.body;
  
      const { error } = productSchema.validate(body, { abortEarly: false });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      next();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: error.message,
      });
    }
  };

 
  