import { getEventsService } from '@/services/explore/get-event.service';
import { getTransactionsService } from '@/services/transactions-admin/get-transactions.service';
import { NextFunction, Request, Response } from 'express';

export class TransactionsAdminController {
  async getTransactions(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 2,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
      };

      const result = await getTransactionsService(
        query,
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
