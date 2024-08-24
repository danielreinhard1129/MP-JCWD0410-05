import { editProfileService } from '@/services/profile/edit-user.service';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async editProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await editProfileService(
        Number(req.params.id),
        req.body,
        req.file!,
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
