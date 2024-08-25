import { transporter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const editStatusTransactionService = async (
  id: number,
  body: Partial<Transaction>,
  // transactionId: number,
) => {
  try {
    const transaction = await prisma.transaction.findFirst({
      where: { id },
      include: {
        user: { select: { id: true, email: true, name: true } },
      },
    });

    if (!transaction) {
      throw new Error('Transaction not found');
    }

    const newStatus = await prisma.transaction.update({
      where: { id },
      data: { ...body },
    });

    if (newStatus.status === 'done') {
      await transporter.sendMail({
        to: transaction.user.email,
        subject: 'Status Payment',
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #4CAF50;">Payment Successful</h2>
      <p>Hello ${transaction.user.name},</p>
      <p>We are pleased to inform you that your payment has been successfully <strong>accepted</strong>.</p>
      <p><strong>Transaction Details:</strong></p>
      <ul>
        <li><strong>Transaction ID:</strong> ${transaction.id}</li>
        <li><strong>Amount Paid:</strong> ${transaction.total}</li>
        <li><strong>Date:</strong> ${transaction.updatedAt}</li>
      </ul>
      <p>Thank you for your trust and continued support.</p>
      <p>If you have any questions, feel free to contact our support team.</p>
      <br/>
      <p>Best regards,</p>
      <p>Festivity</p>
    </div>
  `,
      });
    } else {
      await transporter.sendMail({
        to: transaction.user.email,
        subject: 'Status Payment',
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #9C0000;">Payment Rejected</h2>
      <p>Hello ${transaction.user.name},</p>
      <p>We are sorry to inform you that your payment has been <strong>rejected</strong>.</p>
      <p><strong>Transaction Details:</strong></p>
      <ul>
        <li><strong>Transaction ID:</strong> ${transaction.id}</li>
        <li><strong>Amount Paid:</strong> ${transaction.total}</li>
        <li><strong>Date:</strong> ${transaction.updatedAt}</li>
      </ul>
      <p>Because your proof of payment is invalid </p>
      <p>If you have any questions, feel free to contact our support team.</p>
      <br/>
      <p>Best regards,</p>
      <p>Festivity</p>
    </div>
  `,
      });
    }

    return newStatus;
  } catch (error) {
    throw error;
  }
};
