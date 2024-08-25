'use client';

import useAxios from '@/hooks/useAxios';
import { Event } from '@/types/events';
import { PageableResponse, PaginationQueries } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';

interface GetEventQueries extends PaginationQueries {
  search?: string;
  location?: string;
  userId?: number;
}

const useGetEvents = (queries: GetEventQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['events', queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<Event>>(
        '/events',
        { params: queries },
      );
      return data;
    },
  });
};

export default useGetEvents;
