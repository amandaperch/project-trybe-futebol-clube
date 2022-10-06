import Matches from '../database/models/match';
import Team from '../database/models/team';

export default class MatchesService {
  static getAll = async () => {
    const allTeams = await Matches.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ] });
    return allTeams;
  };

  static getByProgress = async (inProgress: boolean) => {
    const allTeams = await Matches.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ] });
    return allTeams;
  };
}
