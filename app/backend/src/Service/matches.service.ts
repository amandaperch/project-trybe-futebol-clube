import Matches from '../database/models/match';

export default class MatchesService {
  static getAll = async () => {
    const allMatches = await Matches.findAll();
    return allMatches;
  };
}
