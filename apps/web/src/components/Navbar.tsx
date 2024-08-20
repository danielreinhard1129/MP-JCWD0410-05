'use client';

import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosSearch } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PiUserCircleLight } from 'react-icons/pi';
import Autocomplete from './Autocomplate';

const Navbar = () => {
  const session = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/lupa-password' ||
    pathname.startsWith('/dashboard')
  ) {
    return null;
  }
  return (
    <Box bgColor="#003249" position="sticky" top={0} zIndex="999">
      <Container py={{ base: '5', md: '7' }} maxW={{ base: '100%', md: '7xl' }}>
        <Flex
          justify="space-between"
          align="center"
          maxW={{ base: '100%', md: '7xl' }}
        >
          <Link href="/">
            <Image src="/Logo_Festivity_3.svg" w="100px" alt="logo" />
          </Link>
          <Box w="350px" display={{ base: 'none', md: 'block' }}>
            <Autocomplete />
          </Box>
          <Flex
            gap={7}
            align="center"
            color="whitesmoke"
            display={{ base: 'none', md: 'flex' }}
          >
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
              <Flex alignItems="center" gap={2}>
                <Box w="70px" textAlign="center">
                  <Box fontSize="lg">
                    {session.data?.user.id ? (
                      <Box>
                        <Text
                          _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                          cursor="pointer"
                        >
                          {session.data.user.name}
                        </Text>
                        <Text
                          onClick={() => signOut()}
                          cursor="pointer"
                          _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                        >
                          Logout
                        </Text>
                      </Box>
                    ) : (
                      <Link href="/login">
                        <Text
                          _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                          fontSize="lg"
                        >
                          Login
                        </Text>
                      </Link>
                    )}
                  </Box>
                </Box>
              </Flex>
            </Box>
            {/* </Link> */}
          </Flex>
          <IconButton
            aria-label="Open Menu"
            color="white"
            variant="unstyle"
            icon={<GiHamburgerMenu size="30px" />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Container>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={6} mt="24px">
                <Link href="/explore">
                  {/* <InputGroup w="250px">
                    <InputLeftElement pointerEvents="none" pl="8px">
                      <IoIosSearch color="#003249" size="23px" />
                    </InputLeftElement>
                    <Input
                      placeholder="Search Events"
                      borderColor="#003249"
                      borderRadius="25px"
                      textColor="#003249"
                      pl="45px"
                    />
                  </InputGroup> */}
                  <Box w="200px">
                    <Autocomplete />
                  </Box>
                </Link>
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
                <Link href="/about" onClick={onClose}>
                  About
                </Link>
                <Link href="/explore" onClick={onClose}>
                  Explore
                </Link>
                <Link href="/rewards" onClick={onClose}>
                  Reward
                </Link>
                <Link href="/login" onClick={onClose}>
                  Sign in
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
