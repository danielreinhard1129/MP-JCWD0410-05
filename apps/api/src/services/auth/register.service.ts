import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { nanoid } from 'nanoid';

export const registerService = async (body: User) => {
  try {
    const { name, email, password, roles, referral } = body;
    const phone = body.phone.toString();

    let refferedUser;

    if (referral) {
      const referralCheck = await prisma.user.findFirst({
        where: { referral },
      });

      if (!referralCheck) {
        throw new Error('Invalid referral');
      }

      refferedUser = referralCheck;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email, phone }],
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
        phone,
        roles,
        referral: 'FESTIVITY' + nanoid(5),
      },
    });

    if (refferedUser) {
      
      //  logic nambahin 10.000 ke refferedUser
      
      // claim new reward ke newUser.
    }

      return newUser;
  } catch (error) {
    throw error;
  }
};
