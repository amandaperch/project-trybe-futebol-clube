import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user';

const senha = process.env.JWT_SECRET || '123456789';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const e = jwt.verify(authorization, senha) as jwt.JwtPayload;
    const searchUser = await User.findOne({ where: { email: e.userData } });

    req.body.user = searchUser;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
