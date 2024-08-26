'use client';

import useAxios from '@/hooks/useAxios';
import { Event } from '@/types/events';
import { Transaction } from '@/types/transaction';
import { useQuery } from '@tanstack/react-query';

const useGetTransaction = (transactionId: string) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['transactions', transactionId],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Transaction>(
        `/transactions/${transactionId}`,
      );
      return data;
    },
  });
};
export default useGetTransaction;
