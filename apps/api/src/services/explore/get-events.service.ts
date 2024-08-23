import prisma from '@/prisma';
import { Prisma } from '@prisma/client';

interface GetEventService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
  search: string;
  location?: string;
  category?: string;
}

export const getEventsService = async (query: GetEventService) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.EventWhereInput = {};

    if (search) {
      whereClause.name = {
        contains: search,
      };
    }

    const events = await prisma.event.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { user: { select: { name: true } } },
    });

    const count = await prisma.event.count({
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
