import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';

interface CreateEventBody {
  name: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  content: string;
  price: number;
  discount: number;
  quota: number;
}

const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
  userId: number,
) => {
  try {
    const {
      name,
      location,
      start_date,
      end_date,
      description,
      content,
      price,
      discount,
      quota,
    } = body;
    const event = await prisma.event.findFirst({
      where: { name },
    });

    if (event) {
      throw new Error('Nama event telah digunakan');
    }

    const { secure_url } = await cloudinaryUpload(file);

    return await prisma.event.create({
      data: {
        name,
        location,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
        content,
        price: Number(price),
        userId: Number(userId),
        discount: Number(discount),
        quota: Number(quota),
        thumbnail: secure_url,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default createEventService;
