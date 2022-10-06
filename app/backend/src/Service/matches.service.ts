import Matches from '../database/models/match';
import Team from '../database/models/team';
import TeamsService from './teams.service';
import { Match } from '../interface/match.interface';

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

  static create = async (match: Match) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;

    const homeTeamId = await TeamsService.findById(homeTeam.toString());
    const awayTeamId = await TeamsService.findById(awayTeam.toString());

    if (!homeTeamId || !awayTeamId) return null;

    const createMatch = await Matches.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress: true,
    });
    return createMatch;
  };

  static finish = async (id: number) => {
    const finishMatch = await Matches.update({ inProgress: false }, { where: { id } });
    return finishMatch;
  };
}
