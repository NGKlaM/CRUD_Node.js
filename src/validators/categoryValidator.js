import Joi from "joi";

export const categoryValidator = Joi.object(
  {
    title: Joi.string().required(),
    description: Joi.string().required(),
    slug: Joi.string().required(),
}
);
export default categoryValidator;