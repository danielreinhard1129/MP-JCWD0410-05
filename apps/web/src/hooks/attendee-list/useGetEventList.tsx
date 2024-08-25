'use client';

import { Event } from '@/types/events';
import { PageableResponse, PaginationQueries } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios';

interface GetEventListQueries extends PaginationQueries {}

const useGetEventList = (queries: GetEventListQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['eventlist', queries],
    queryFn: async () => {
      const { data } =
        await axiosInstance.get<PageableResponse<Event>>('/events');

      return data;
    },
  });
};
export default useGetEventList;
