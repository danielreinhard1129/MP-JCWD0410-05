import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  InputGroup,
  InputLeftElement,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LiaTheaterMasksSolid } from 'react-icons/lia';
import { PiBowlFoodLight } from 'react-icons/pi';
import { BsBookmarkStar } from 'react-icons/bs';
import { Select } from '@chakra-ui/react';
import { TfiLocationPin } from 'react-icons/tfi';
import Link from 'next/link';

const Explore = () => {
  return (
    <Box>
      <Container maxW="7xl" pt="40px" pb="100px">
        {/* ini kategori */}
        <Flex gap={6} color="#718096">
          <Link href="/explore">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              _hover={{ color: '#E86B32' }}
            >
              <BsBookmarkStar size="30px" />
              <Text fontSize="md">Semua</Text>
            </Box>
          </Link>
          <Link href="/explore">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              _hover={{ color: '#E86B32' }}
            >
              <HiOutlineMusicalNote size="30px" />
              <Text fontSize="md">Festival</Text>
            </Box>
          </Link>
          <Link href="/explore">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              _hover={{ color: '#E86B32' }}
            >
              <LiaTheaterMasksSolid size="30px" />
              <Text fontSize="md">Seni</Text>
            </Box>
          </Link>
          <Link href="/explore">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              _hover={{ color: '#E86B32' }}
            >
              <PiBowlFoodLight size="30px" />
              <Text fontSize="md">Kuliner</Text>
            </Box>
          </Link>
        </Flex>
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
        {/* ini card */}
        <Grid>
          <GridItem display="flex" gap="48px" justifyContent="space-between">
            <Box maxW="sm">
              <Image
                src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Green double couch with wooden legs"
                borderRadius="25px"
              />
              <Stack mt="6" spacing="3">
                <Box>
                  <Heading size="md" isTruncated>
                    Little Orchard Cider and Music Festival 2024
                  </Heading>
                  <Text align="justify" isTruncated>
                    Healey's Cyder Farm
                  </Text>
                  <Text>Fri 13 Sep 2024 12:00 PM</Text>
                </Box>
              </Stack>
              <Link href="/explore/id">
                <Text
                  fontWeight="semibold"
                  mt={3}
                  _hover={{ color: '#E86B32' }}
                >
                  See the event...
                </Text>
              </Link>
            </Box>
            <Box maxW="sm">
              <Image
                src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Green double couch with wooden legs"
                borderRadius="25px"
              />
              <Stack mt="6" spacing="3">
                <Box>
                  <Heading size="md" isTruncated>
                    Little Orchard Cider and Music Festival 2024
                  </Heading>
                  <Text align="justify" isTruncated>
                    Healey's Cyder Farm
                  </Text>
                  <Text>Fri 13 Sep 2024 12:00 PM</Text>
                </Box>
              </Stack>
              <Link href="/explore/id">
                <Text
                  fontWeight="semibold"
                  mt={3}
                  _hover={{ color: '#E86B32' }}
                >
                  See the event...
                </Text>
              </Link>
            </Box>
            <Box maxW="sm">
              <Image
                src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Green double couch with wooden legs"
                borderRadius="25px"
              />
              <Stack mt="6" spacing="3">
                <Box>
                  <Heading size="md" isTruncated>
                    Little Orchard Cider and Music Festival 2024
                  </Heading>
                  <Text align="justify" isTruncated>
                    Healey's Cyder Farm
                  </Text>
                  <Text>Fri 13 Sep 2024 12:00 PM</Text>
                </Box>
              </Stack>
              <Link href="/explore/id">
                <Text
                  fontWeight="semibold"
                  mt={3}
                  _hover={{ color: '#E86B32' }}
                >
                  See the event...
                </Text>
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
