import { JwtPayload, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user';

const senha = process.env.JWT_SECRET || '123456789';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const decode = verify(authorization, senha) as JwtPayload;

    const findUser = await User.findOne({ where: { email: decode.userData } });

    req.body.user = findUser;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
