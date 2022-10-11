import Team from '../database/models/team';
import Matches from '../database/models/match';
import { criarPlacares, classificarPlacares } from '../Utils/leaderBoard';

export default class LeaderBoardService {
  static getAll = async () => {
    const find = await Team.findAll({
      include: [
        {
          model: Matches,
          as: 'matchesHome',
          where: {
            inProgress: 0,
          } },
      ],
    });
    const createLeaderBoard = find.map((time) => criarPlacares(time));
    const rankin = classificarPlacares(createLeaderBoard);
    return rankin;
  };
}
