import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const editProfileService = async (
  id: number,
  body: Partial<User>,
  file?: Express.Multer.File,
) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new Error('Account not found');
    }

    if (file) {
      const { secure_url } = await cloudinaryUpload(file);
      body.profile_picture = secure_url;
    }

    const newUser = await prisma.user.update({
      where: { id },
      data: { ...body },
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
