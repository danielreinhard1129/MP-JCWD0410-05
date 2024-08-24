'use client';

import useAxios from '@/hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface ChangePasswordPayload {
  password: string;
  confirmPassword: string;
}

const useChangePassword = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: ChangePasswordPayload) => {
      const { data } = await axiosInstance.patch(
        '/auth/change-password',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success('Change password success');
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

export default useChangePassword;
