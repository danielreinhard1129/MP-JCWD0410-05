'use client';

import useAxios from '@/hooks/useAxios';
import { Event } from '@/types/events';
import { useQuery } from '@tanstack/react-query';

const useGetEvent = (id: number) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Event>(`/events/${id}`);
      return data;
    },
  });
};
export default useGetEvent;
