'use client';

import useAxios from '@/hooks/useAxios';
import { Role } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface LoginPayload {
  email: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post('/auth/login', payload);
      return data;
    },
    onSuccess: async (data) => {
      await signIn('credentials', { ...data, redirect: false });
      toast.success('Login Success');

      if (data?.roles === 'Customer') {
        return router.replace('/');
      } else {
        return router.replace('/dashboard');
      }
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useLogin;
