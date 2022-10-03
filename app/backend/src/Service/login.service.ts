import User from '../database/models/user';

export default class loginService {
  static login = async (user: string) => {
    const search = await User.findOne({ where: { email: user } });
    if (!search) return false;
    return search;
  };
}
