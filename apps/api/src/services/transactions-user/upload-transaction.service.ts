import { cloudinaryUpload } from '@/lib/cloudinary';
import { transporter } from '@/lib/nodemailer';
import { StatusPayment } from '@prisma/client';
import { format } from 'date-fns';
import prisma from '@/prisma';

interface UpdateTransactionBody {
  status: StatusPayment;
}

export const updateTransactionService = async (
  transactionId: number,
  body: UpdateTransactionBody,
  file: Express.Multer.File,
) => {
  try {
    const { status } = body;
    const transaction = await prisma.transaction.findFirst({
      where: { id: transactionId },
      include: { user: { select: { name: true } } },
    });

    if (!transaction) {
      throw new Error('Invalid transaction id');
    }

    const { secure_url } = await cloudinaryUpload(file);

    return await prisma.transaction.update({
      where: { id: transactionId },
      data: { status, payment_proof: secure_url },
    });
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
};
