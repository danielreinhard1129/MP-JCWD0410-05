import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (body: User) => {
  try {
    const { name, email, phone, password, roles } = body;

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
      },
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
