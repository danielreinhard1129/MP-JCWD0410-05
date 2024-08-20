import { EventsController } from '@/controllers/events.controller';
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
  }

  getRouter(): Router {
    return this.router;
  }
}
