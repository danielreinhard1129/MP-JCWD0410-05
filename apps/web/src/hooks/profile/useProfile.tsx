'use client';

import useAxios from '@/hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface EditProfilePayload {
  profile_picture: File | string | null;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const useProfile = (id: number) => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: EditProfilePayload) => {
      const editProfileForm = new FormData();

      editProfileForm.append('profile_picture', payload.profile_picture!);
      editProfileForm.append('name', payload.name);
      editProfileForm.append('email', payload.email);
      editProfileForm.append('phone', payload.phone);
      editProfileForm.append('address', payload.address);
      const { data } = await axiosInstance.patch(
        `/user/${id}`,
        editProfileForm,
      );
      return data;
    },
    onSuccess: async (data) => {
      await signIn('credentials', { ...data, redirect: false });
      toast.success('Edit Profile Success');
      if (data.roles !== 'Admin') {
        router.push('/');
      } else {
        return router.push('/dashboard');
      }
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useProfile;
