'use client';

import useAxios from '@/hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface CreateEventPayload {
  thumbnail: File | null;
  name: string;
  location: string;
  start_date: Date | undefined;
  end_date: Date | undefined;
  description: string;
  content: string;
  price: number;
  quota: number;
  discount: number;
}

const useCreateEvent = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: CreateEventPayload) => {
      const createEventForm = new FormData();

      createEventForm.append('thumbnail', payload.thumbnail!);
      createEventForm.append('name', payload.name);
      createEventForm.append('location', payload.location);
      createEventForm.append('start_date', payload.start_date!.toString());
      createEventForm.append('end_date', payload.end_date!.toString());
      createEventForm.append('description', payload.description);
      createEventForm.append('content', payload.content);
      createEventForm.append('price', payload.price.toString());
      createEventForm.append('quota', payload.quota.toString());
      createEventForm.append('discount', payload.discount.toString());

      const { data } = await axiosInstance.post('/events', createEventForm);
      return data;
    },
    onSuccess: async (data) => {
      toast.success('Create Event Success');
      router.push('/dashboard');
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreateEvent;
