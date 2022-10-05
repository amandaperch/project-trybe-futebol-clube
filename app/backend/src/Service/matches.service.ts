// import Matches from '../database/models/match';
// import Teams from '../database/models/team';

// export default class MatchesService {
//   static getAll = async () => {
//     const allMatches = await Matches.findAll({
//       include: [
//         { model: Teams, as: 'teamHome', attributes: ['teamName'] },
//         { model: Teams, as: 'teamAway', attributes: ['teamName'] },
//       ] });
//     return allMatches;
//   };

//   static matcheInProgress = async (inProgress: boolean) => {
//     const allMatches = await Matches.findAll({
//       where: { inProgress },
//       include: [
//         { model: Teams, as: 'teamHome', attributes: ['teamName'] },
//         { model: Teams, as: 'teamAway', attributes: ['teamName'] },
//       ] });
//     return allMatches;
//   };
// }
