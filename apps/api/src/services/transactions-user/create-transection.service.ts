import prisma from '@/prisma';
import { PaymentMethod } from '@prisma/client';

interface CreateTransactionBody {
  qty: number;
  eventId: number;
  payment_method: PaymentMethod;
}

export const createTransactionService = async (
  body: CreateTransactionBody,
  userId: number,
) => {
  try {
    const { qty, eventId, payment_method } = body;

    const event = await prisma.event.findFirst({
      where: { id: eventId },
    });

    if (!event) {
      throw new Error('Invalid event id');
    }

    if (event.quota - event.booked < qty) {
      throw new Error('Ticket quota exceeded.');
    }

    await prisma.event.update({
      where: { id: eventId },
      data: {
        booked: {
          increment: Number(qty),
        },
      },
    });

    return await prisma.transaction.create({
      data: {
        qty: Number(qty),
        eventId,
        userId,
        total: event.price * qty,
        price: event.price,
        status: `waiting_for_payment`,
        payment_method,
      },
    });
  } catch (error) {
    throw error;
  }
};
