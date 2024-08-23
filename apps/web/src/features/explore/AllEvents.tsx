'use client';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
// import EventListCard from './EventListCard';
import Link from 'next/link';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import EventListCard from '../home/components/EventListCard';

const AllEventList = () => {
  const { data, isPending } = useGetEvents({
    take: 12,
  });
  return (
    <Box>
      <Container maxW="7xl" py={7}>
        <Heading textAlign="center">FESTIVALS</Heading>
        <Grid
          justifyContent={{ base: 'center', md: 'center' }}
          templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
          gap={5}
        >
          {data?.data.map((event, index) => {
            return (
              <Link href={`/explore/${event.id}`}>
                <GridItem
                  display="flex"
                  gap={{ base: '30px', md: '50px' }}
                  py={{ base: '20px', md: '40px' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <EventListCard
                    key={index}
                    name={event.name}
                    thumbnail={event.thumbnail}
                    location={event.location}
                    start_date={event.start_date}
                    end_date={event.end_date}
                  />
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllEventList;
