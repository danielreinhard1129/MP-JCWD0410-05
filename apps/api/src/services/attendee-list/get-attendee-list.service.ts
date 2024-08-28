import prisma from '@/prisma';
import { Prisma } from '@prisma/client';

interface GetAttendeeListService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
  eventId: number;
  search?: string;
}

export const getAttendeeListService = async (
  query: GetAttendeeListService,
  userId: number,
) => {
  try {
    const { take, page, sortBy, sortOrder, eventId } = query;

    const whereClause: Prisma.TransactionWhereInput = {
      status: { equals: 'done' },
      event: {
        userId,
      },
    };

    if (eventId) {
      whereClause.eventId = eventId;
    }

    const attendeeList = await prisma.transaction.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { user: true, event: true },
    });

    const count = await prisma.transaction.count({
      where: whereClause,
    });

    return {
      data: attendeeList,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
