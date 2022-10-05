import Matches from '../database/models/match';

export default class MatchesService {
  static getAll = async () => {
    const allTeams = await Matches.findAll();
    return allTeams;
  };
}
