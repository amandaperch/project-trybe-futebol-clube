import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const senha = process.env.JWT_SECRET || '123456789';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token must be a valid token' });
  jwt.verify(authorization, senha);
  next();
};

export default validateToken;
