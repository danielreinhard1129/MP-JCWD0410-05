'use client';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import EventListCard from './EventListCard';
import Link from 'next/link';
import useGetEvents from '@/hooks/api/event/useGetEvents';

const EventList = () => {
  const { data, isPending } = useGetEvents({
    take: 3,
  });
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
                <Link href={`/explore/${event.id}`}>
                  <EventListCard
                    key={index}
                    name={event.name}
                    thumbnail={event.thumbnail}
                    location={event.location}
                    start_date={event.start_date}
                    end_date={event.end_date}
                  />
                </Link>
              );
            })}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventList;
