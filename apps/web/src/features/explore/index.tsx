'use client';
// import EventList from '@/components/EventList';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { TfiLocationPin } from 'react-icons/tfi';
import AllEventList from './AllEvents';
import { useState } from 'react';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import EventListCard from '../home/components/EventListCard';

const ExplorePage = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const { data, isPending } = useGetEvents({
    take: 12,
    location: selectedLocation,
  });
  const handleSelectLocation = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value;
    if (value === 'all') {
      setSelectedLocation('');
    } else {
      setSelectedLocation(value);
    }
  };
  return (
    <Box>
      <Container maxW={{ base: '100%', md: '7xl' }}>
        <Box pt={{ base: '20px', md: '40px' }} pb="100px">
          {/* ini tempat */}
          <Box gap={7} position="relative" py={4}>
            <Text fontWeight="bold" w="156px" fontSize="xl">
              Explore event in
            </Text>

            {/* ini dropdown */}
            <Select
              w="150px"
              icon={<TfiLocationPin size="25px" color="#718096" />}
              placeholder=""
              borderRadius="20px"
              mt="10px"
              onChange={handleSelectLocation}
            >
              <option value="all">All</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Jogja">Jogja</option>
              <option value="Malang">Malang</option>
              <option value="Surabaya">Surabaya</option>
            </Select>
          </Box>
          {/* semua event */}
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
        </Box>
      </Container>
    </Box>
  );
};

export default ExplorePage;
