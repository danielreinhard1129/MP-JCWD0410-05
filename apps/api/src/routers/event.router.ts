import { EventsController } from '@/controllers/events.controller';
import { uploader } from '@/lib/multer';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventsController: EventsController;

  constructor() {
    this.eventsController = new EventsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventsController.getEvents);
    this.router.post(
      '/',
      verifyToken,
      uploader(5).single('thumbnail'),
      this.eventsController.createEvent,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
