'use client';

import useAxios from '@/hooks/useAxios';
import { Transactions } from '@/types/transaction';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface ChangeStatusTransactionPayload {
  status: string;
  id: number;
}

const useChangeStatusTransaction = () => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: ChangeStatusTransactionPayload) => {
      const { data } = await axiosInstance.patch<Transactions>(
        `/transaction/${payload.id}`,
        { status: payload.status },
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Update status payment success');
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};
export default useChangeStatusTransaction;
