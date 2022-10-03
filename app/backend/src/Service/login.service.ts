import User from '../database/models/user';

export default class LoginService {
  static login = async (user: string) => {
    const searchUser = await User.findOne({ where: { email: user } });
    if (!searchUser) return false;
    return searchUser;
  };
}
