import Joi from 'joi';

export const productSchema = Joi.object({
  title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    rating: Joi.number().required(),
});
