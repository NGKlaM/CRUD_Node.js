import Joi from 'joi';

export const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  image: Joi.string(),
  price: Joi.number().required(),
  rate: Joi.number(),
  student: Joi.object({
    _id: Joi.string(),
    fullname: Joi.string(),
    email: Joi.string(),
    role: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  }),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});
