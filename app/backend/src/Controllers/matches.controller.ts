// import { Request, Response } from 'express';
// import MatchesService from '../Service/matches.service';

// export default class MatchController {
//   static async getAll(req: Request, res: Response) {
//     const { inProgress } = req.query;
//     if (!inProgress) {
//       const allMatches = await MatchesService.getAll();
//       return res.status(200).json(allMatches);
//     }
//     if (inProgress === 'true') {
//       const matchesInProgress = await MatchesService.matcheInProgress(true);
//       return res.status(200).json(matchesInProgress);
//     }
//     if (inProgress === 'false') {
//       const matchesFinished = await MatchesService.matcheInProgress(false);
//       return res.status(200).json(matchesFinished);
//     }
//   }
// }
