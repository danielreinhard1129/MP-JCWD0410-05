'use client';

import { PageableResponse } from '@/types/pagination';
import { Transactions } from '@/types/transaction';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios';

// interface GetTransactionsQueries extends PaginationQueries {}

const useGetTransactions = (/*queries: GetTransactionsQueries*/) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const { data } =
        await axiosInstance.get<PageableResponse<Transactions>>('/transaction');
      return data;
    },
  });
};
export default useGetTransactions;
