import { Request, Response } from 'express';
import TeamService from '../Service/teams.service';

export default class TeamController {
  static async findAll(req: Request, res: Response) {
    const team = await TeamService.getAll();
    return res.status(200).json(team);
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const find = await TeamService.findById(id);
    if (!find) return res.status(404).json({ message: 'Team does not exist' });
    return res.status(200).json(find);
  }
}
