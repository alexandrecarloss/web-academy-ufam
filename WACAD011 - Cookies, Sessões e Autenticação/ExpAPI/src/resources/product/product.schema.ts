import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().min(0).precision(2).required(),
    stock: Joi.number().integer().min(0).required()
})
