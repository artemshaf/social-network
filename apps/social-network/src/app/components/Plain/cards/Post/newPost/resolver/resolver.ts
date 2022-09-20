import Joi from 'joi';
import { IFile } from '@social-network/interfaces';

const JoiString = Joi.string().min(3);

export const postSchema = Joi.object({
  user: JoiString,
  text: JoiString,
  files: Joi.object(),
});
