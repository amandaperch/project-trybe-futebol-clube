import Teams from '../database/models/team';

export default class TeamsService {
  static getAll = async () => {
    const allTeam = await Teams.findAll();
    return allTeam;
  };
}
