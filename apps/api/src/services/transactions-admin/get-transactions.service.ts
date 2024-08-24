import prisma from '@/prisma';
import { Prisma } from '@prisma/client';

interface GetTransactionsService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
}

export const getTransactionsService = async (
  query: GetTransactionsService,
  userId: number,
) => {
  try {
    const { take, page, sortBy, sortOrder } = query;

    const whereClause: Prisma.TransactionWhereInput = {
      event: { userId },
    };

    const events = await prisma.transaction.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { event: true },
    });

    const count = await prisma.transaction.count({
      where: whereClause,
    });

    return {
      data: events,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
