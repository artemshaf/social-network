import Joi from 'joi';
import { userSex } from '../../../../../../../libs/interfaces/src';

const JoiString = Joi.string().min(3);

export const profileSchema = Joi.object({
  name: JoiString.required(),
  surname: JoiString.required(),
  sex: Joi.string().valid('Men', 'Women'),
  bdate: Joi.date(),
  'location.city': Joi.string(),
  'location.country': Joi.string(),
  status: Joi.string(),
  phone: Joi.string(),
});
