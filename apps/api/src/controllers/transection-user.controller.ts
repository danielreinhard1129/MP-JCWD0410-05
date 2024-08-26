import { createTransactionService } from '@/services/transactions-user/create-transection.service';
import { getTransactionService } from '@/services/transactions-user/get-transaction.service';
import { getTransactionsUserService } from '@/services/transactions-user/get-transactions-user.service';
import { updateTransactionService } from '@/services/transactions-user/upload-transaction.service';
import { NextFunction, Request, Response } from 'express';

export class TransactionsUserController {
  async getTransactions(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getTransactionsUserService(
        Number(res.locals.user.id),
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getTransactionService(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createTransactionService(
        req.body,
        Number(res.locals.user.id),
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async updateTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateTransactionService(
        Number(req.params.id),
        req.body,
        req.file!,
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
