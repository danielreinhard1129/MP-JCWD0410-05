'use client';

import EventListCard from '@/features/home/components/EventListCard';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';

const EventList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending } = useGetEvents({
    page,
    take: 3,
  });

  if (isPending) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" pb="30px">
        <Spinner />
      </Box>
    );
  }

  if (!data) {
    return <h1>Event tidak ditemukan</h1>;
  }

  return (
    <Box>
      <Container maxW="7xl" py={7}>
        <Heading textAlign="center">FESTIVALS</Heading>
        <Grid justifyContent={{ base: 'center', md: 'center' }}>
          <GridItem
            display="flex"
            gap={{ base: '30px', md: '50px' }}
            py={{ base: '20px', md: '50px' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            {data?.data.map((event, index) => {
              return (
                <EventListCard
                  key={index}
                  name={event.name}
                  thumbnail={event.thumbnail}
                  location={event.location}
                  start_date={event.start_date}
                  end_date={event.end_date}
                />
              );
            })}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventList;
