import { UserController } from '@/controllers/user.controller';
import { uploader } from '@/lib/multer';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.patch(
      '/:id',
      uploader().single('profile_picture'),
      this.userController.editProfile,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
