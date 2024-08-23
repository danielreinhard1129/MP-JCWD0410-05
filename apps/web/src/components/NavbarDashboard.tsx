'use client';

import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';

const Navbar = () => {
  const session = useSession();
  return (
    <Flex boxShadow="md" py={5} justify="space-between" px={7}>
      <Flex align="center" gap={1} _hover={{ color: '#E86B32' }}>
        <Link href="/dashboard/create-event">
          <IoMdAddCircleOutline size="25px" />
        </Link>
        <Link href="/dashboard/create-event">
          <Text fontSize="19px">Buat Event</Text>
        </Link>
      </Flex>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Link href="/dashboard/notification">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell size="25px" />}
          />
        </Link>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'md'}>
                  {session.data?.user.profile_picture}
                </Avatar>

                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="m" fontWeight="semibold">
                    {session.data?.user.name}
                    {session.data?.user.name}
                  </Text>
                  <Text fontSize="s" color="#E86B32" fontWeight="medium">
                    {session.data?.user.roles}
                    {session.data?.user.roles}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Link href="/dashboard/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem
                onClick={() => signOut()}
                cursor="pointer"
                _hover={{ color: '#FF0000', fontWeight: 'semibold' }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
