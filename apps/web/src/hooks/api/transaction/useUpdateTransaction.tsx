'use client';

import useAxios from '@/hooks/useAxios';
import { Status, StatusPayment } from '@/types/transaction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface UpdateTransactionPayload {
  payment_proof: File;
  status: StatusPayment;
}

const useUpdateTransaction = (transactionId: number) => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateTransactionPayload) => {
      const updateTransactionForm = new FormData();

      updateTransactionForm.append('payment_proof', payload.payment_proof);
      updateTransactionForm.append('status', payload.status);

      const { data } = await axiosInstance.patch(
        `/transactions/${transactionId}`,
        updateTransactionForm,
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Payment proof uploaded successfully');
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      router.push(`/`);
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUpdateTransaction;
