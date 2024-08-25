import { AttendeeListController } from '@/controllers/attendee-list.controller';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class AttendeeListRouter {
  private router: Router;
  private attendeelistController: AttendeeListController;

  constructor() {
    this.attendeelistController = new AttendeeListController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/',
      verifyToken,
      this.attendeelistController.getAttendeeList,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
