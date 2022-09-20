import Joi from 'joi';
import { userSex } from '@social-network/interfaces';

const JoiString = Joi.string().min(3);

export const profileSchema = Joi.object({
  name: JoiString.required(),
  surname: JoiString.required(),
  sex: Joi.string().valid('Men', 'Women'),
  bdate: Joi.date(),
  location: Joi.object({
    city: Joi.string().optional(),
    country: Joi.string().optional(),
  }).optional(),
  status: Joi.string(),
  phone: Joi.string(),
});
