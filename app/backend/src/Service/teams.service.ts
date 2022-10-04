import Teams from '../database/models/team';

export default class TeamsService {
  static getAll = async () => {
    const allTeam = await Teams.findAll();
    return allTeam;
  };

  static findById = async (id: string) => {
    const team = await Teams.findByPk(id);
    return team;
  };
}
