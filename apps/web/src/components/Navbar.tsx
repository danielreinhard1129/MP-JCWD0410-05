'use client';

import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosSearch } from 'react-icons/io';
import { PiUserCircleLight } from 'react-icons/pi';

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();

  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname.startsWith('/dashboard')
  ) {
    return null;
  }
  return (
    <Box bgColor="#003249" position="sticky" top={0} zIndex={3}>
      <Container maxW="7xl" py={6}>
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Image src="/Logo_Festivity_3.svg" w="100px" alt="logo" />
          </Link>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none" pl="8px">
              <IoIosSearch color="white" size="23px" />
            </InputLeftElement>
            <Input
              placeholder="Search Events"
              borderColor="white"
              borderRadius="25px"
              textColor="white"
              pl="45px"
            />
          </InputGroup>
          <Flex gap={7} align="center" color="whitesmoke">
            <Link href="/">
              <Box w="53px" textAlign="center">
                <Text
                  fontSize="lg"
                  _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                >
                  Home
                </Text>
              </Box>
            </Link>
            <Link href="/about">
              <Box w="53px" textAlign="center">
                <Text
                  fontSize="lg"
                  _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                >
                  About
                </Text>
              </Box>
            </Link>
            <Link href="/explore">
              <Box w="66px" textAlign="center">
                <Text
                  fontSize="lg"
                  _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                >
                  Explore
                </Text>
              </Box>
            </Link>
            <Link href="/rewards">
              <Box w="76px" textAlign="center">
                <Text
                  fontSize="lg"
                  _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                >
                  Rewards
                </Text>
              </Box>
            </Link>
            {/* <Link href="/login"> */}
            <Box w="102px" alignContent="center">
              <Flex
                alignItems="center"
                gap={2}
                _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
              >
                <Box w="60px" textAlign="center">
                  <Text fontSize="lg">
                    {session.data?.user.id ? (
                      <Box>
                        <Link href="/">{session.data.user.name}</Link>
                        <Text onClick={() => signOut()}>Logout</Text>
                      </Box>
                    ) : (
                      <Link href="/login">Login</Link>
                    )}
                  </Text>
                </Box>
                <PiUserCircleLight size="35px" />
              </Flex>
            </Box>
            {/* </Link> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
