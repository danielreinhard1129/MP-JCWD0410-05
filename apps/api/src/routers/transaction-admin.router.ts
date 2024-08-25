import { TransactionsAdminController } from '@/controllers/transaction-admin.controller';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionsAdminController;

  constructor() {
    this.transactionController = new TransactionsAdminController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/',
      verifyToken,
      this.transactionController.getTransactions,
    );
    this.router.patch(
      '/:id',
      verifyToken,
      this.transactionController.changeStatusPayment,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
