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

const ExplorePage = () => {
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
            >
              <option value="option1">Jakarta</option>
              <option value="option2">Bandung</option>
              <option value="option3">Yogyakarta</option>
              <option value="option4">Malang</option>
              <option value="option5">Surabaya</option>
            </Select>
          </Box>
          <AllEventList />
        </Box>
      </Container>
    </Box>
  );
};

export default ExplorePage;
