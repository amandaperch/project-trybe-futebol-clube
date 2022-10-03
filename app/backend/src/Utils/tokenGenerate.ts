import * as jwt from 'jsonwebtoken';
import User from '../database/models/user';

const tokenGenerate = async (payload: User) => {
  const jwtSingOptions: jwt.SignOptions = {
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, process.env.JWT_SECRET as string, jwtSingOptions);

  return token;
};

export default tokenGenerate;
