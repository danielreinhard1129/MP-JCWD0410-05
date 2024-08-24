'use client';

import useAxios from '@/hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface ForgotPasswordPayload {
  email: string;
}

const useForgotPassword = () => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: ForgotPasswordPayload) => {
      const { data } = await axiosInstance.post(
        '/auth/forgot-password',
        payload,
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Send email success');
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};
export default useForgotPassword;
