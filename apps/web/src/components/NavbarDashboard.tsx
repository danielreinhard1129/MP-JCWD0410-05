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
import Link from 'next/link';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';

const Navbar = () => {
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
                <Avatar
                  size={'md'}
                  src={
                    'https://images.unsplash.com/photo-1534399315465-2b91232de345?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="m" fontWeight="semibold">
                    Morten Pedersen
                  </Text>
                  <Text fontSize="s" color="#E86B32" fontWeight="medium">
                    Admin
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
              <MenuItem _hover={{ color: '#FF0000' }}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
