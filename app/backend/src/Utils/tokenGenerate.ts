import * as jwt from 'jsonwebtoken';
import user from '../database/models/user';

const generateToken = (payload: user) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string);

  return token;
};

export default generateToken;
