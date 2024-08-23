import prisma from '@/prisma';

export const getEventService = async (id: number) => {
  try {
    const event = await prisma.event.findFirst({
      where: { id },
      include: {
        user: { select: { name: true } },
      },
    });

    if (!event) {
      throw new Error('Invalid event id');
    }

    return event;
  } catch (error) {
    throw error;
  }
};
