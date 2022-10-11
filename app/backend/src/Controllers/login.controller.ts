import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import LoginService from '../Service/login.service';
import LoginToken from '../Utils/tokenGenerate';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await LoginService.login(email);

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (user === false) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const tokenNew = await LoginToken(email);
    return res.status(200).json({ token: tokenNew });
  }

  static async loginValidate(req: Request, res: Response) {
    const { role } = req.body.user;
    return res.status(200).json({ role });
  }
}
