import Joi from 'joi';

const JoiString = Joi.string().min(3);
const JoiBoolean = Joi.boolean().valid(true);

export const registerSchema = Joi.object({
  email: JoiString.required()
    .email({ tlds: { allow: false } })
    .label('email')
    .required()
    .messages({ 'any.only': 'Email' }),
  password: JoiString.required()
    .max(20)
    .label('password')
    .required()
    .messages({ 'any.only': 'Email' }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .label('confirmPassword')
    .messages({ 'any.only': 'confirmPassword not equal password' }),
  agree: JoiBoolean.required(),
});

export const authSchema = Joi.object({
  email: JoiString.required()
    .email({ tlds: { allow: false } })
    .label('email')
    .required()
    .messages({ 'any.only': 'Email' }),
  password: JoiString.required()
    .max(20)
    .label('password')
    .required()
    .messages({ 'any.only': 'Email' }),
});
