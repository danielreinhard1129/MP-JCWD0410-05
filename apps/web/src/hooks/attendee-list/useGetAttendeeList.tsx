'use client';

import { PageableResponse, PaginationQueries } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios';
import { Transactions } from '@/types/transaction';

interface GetAttendeeListQueries extends PaginationQueries {
  eventId?: number;
  search?: string;
}

const useGetAttendeeList = (queries: GetAttendeeListQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['attendeelist', queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<Transactions>>(
        '/attendee-list',
        { params: queries },
      );
      return data;
    },
  });
};
export default useGetAttendeeList;
