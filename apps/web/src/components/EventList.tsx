import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const EventList = () => {
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
            <Box maxW="xs">
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
            <Box maxW="xs">
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
            <Box maxW="xs">
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

export default EventList;
