import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { nanoid } from 'nanoid';
import { nanoid } from 'nanoid';

export const registerService = async (body: User) => {
  try {
    const { name, email, phone, password, roles, referral } = body;

    const phoneNumber = phone.toString();

    let referredUser;

    if (referral) {
      // find di db user where refferal ==== req.body.refferal
      // klo g ada throw error
      const user = await prisma.user.findFirst({
        where: { referral },
        include: { userPoints: true },
      });

      if (!user) {
        throw new Error('Invalid Referral');
      }

      referredUser = user;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email, phone: phoneNumber }],
      },
    });

    if (existingUser) {
      throw new Error('Email or phone number already exist');
    }

    const hashedPassword = await hashPassword(password!);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        phone: phoneNumber,
        roles,
        referral: nanoid(5),
      },
    });

    await prisma.userPoint.create({
      data: {
        userId: newUser.id,
      },
    });

    if (referredUser) {
      const now = new Date();
      const threeMonthFromNow = new Date(now.setMonth(now.getMonth() + 3));
      await prisma.userPoint.update({
        where: { userId: referredUser.id },
        data: {
          points: {
            increment: 10000,
          },
          exp_date: threeMonthFromNow,
        },
      });
      // increment point 10 rb milik reffered user
      // claim reward untuk newUser
      await prisma.userReward.create({
        data: {
          userId: newUser.id,
          status: 'Unused',
          rewardId: 1,
        },
      });

      await prisma.reward.update({
        where: { id: 1 },
        data: {
          claimed: {
            increment: 1,
          },
        },
      });
    }

    return newUser;
  } catch (error) {
    throw error;
  }
};
