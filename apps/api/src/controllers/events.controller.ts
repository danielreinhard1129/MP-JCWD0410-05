import createEventService from '@/services/explore/create-event.service';
import { getEventService } from '@/services/explore/get-event.service';
import { getEventsService } from '@/services/explore/get-events.service';
import { NextFunction, Request, Response } from 'express';

export class EventsController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 2,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
        location: (req.query.location as string) || '',
        userId: parseInt(req.query.userId as string) || 0,
      };

      const result = await getEventsService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createEventService(
        req.body,
        req.file!,
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventService(Number(req.params.id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
