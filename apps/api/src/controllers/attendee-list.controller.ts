import { getAttendeeListService } from '@/services/attendee-list/get-attendee-list.service';
import { NextFunction, Request, Response } from 'express';

export class AttendeeListController {
  async getAttendeeList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 100,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        eventId: parseInt(req.query.eventId as string) || 0,
      };

      const result = await getAttendeeListService(
        query,
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
