import * as jwt from 'jsonwebtoken';
import { Login } from '../interface/login.interface';

const senha = process.env.JWT_SECRET || '123456789';

const tokenGenerate = async (userLogin: Login) => {
  const jwtSingOptions: jwt.SignOptions = {
    algorithm: 'HS256',
  };

  const token = jwt.sign({ userData: userLogin }, senha, jwtSingOptions);

  return token;
};

export default tokenGenerate;
