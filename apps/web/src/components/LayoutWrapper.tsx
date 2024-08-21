'use client';
// components/Sidebar.js
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { GoHome } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { IoStatsChartOutline } from 'react-icons/io5';
import { MdOutlineEventNote } from 'react-icons/md';
import { PiUserList } from 'react-icons/pi';
import { TbSettings } from 'react-icons/tb';
import NavbarDashboard from './NavbarDashboard';
import { redirect, usePathname } from 'next/navigation';
import DaftarAdmin from '@/app/dashboard/register/page';
import { useSession } from 'next-auth/react';

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  if (pathname === '/dashboard/register') {
    return <DaftarAdmin />;
  }
  const session = useSession();

  if (session.data?.user.roles === 'Customer') {
    return redirect('/dashboard/register');
  }

  return (
    <Flex>
      <Box w="300px" bg="#003249" color="white" px={7}>
        <Link href="/dashboard">
          <Image src="/Logo_Festivity_3.svg" w="175px" mt="50px" />
        </Link>
        <Flex direction="column" mt="70px">
          <Link href="/dashboard">
            <Box
              display="flex"
              mb="7"
              py={1}
              gap={5}
              alignItems="center"
              _hover={{
                bgColor: '#D4CDF4',
                color: '#003249',
                borderRadius: '7px',
              }}
            >
              <Box pl={3}>
                <GoHome size="25px" />
              </Box>
              <Text fontSize="21px">Home</Text>
            </Box>
          </Link>
          <Link href="/dashboard/events">
            <Box
              display="flex"
              mb="7"
              py={1}
              gap={5}
              alignItems="center"
              _hover={{
                bgColor: '#D4CDF4',
                color: '#003249',
                borderRadius: '7px',
              }}
            >
              <Box pl={3}>
                <MdOutlineEventNote size="25px" />
              </Box>
              <Text fontSize="21px">Events</Text>
            </Box>
          </Link>
          <Link href="/dashboard/statistics">
            <Box
              display="flex"
              mb="7"
              py={1}
              gap={5}
              alignItems="center"
              _hover={{
                bgColor: '#D4CDF4',
                color: '#003249',
                borderRadius: '7px',
              }}
            >
              <Box pl={3}>
                <IoStatsChartOutline size="25px" />
              </Box>
              <Text fontSize="21px">Statistics</Text>
            </Box>
          </Link>
          <Link href="/dashboard/transactions">
            <Box
              display="flex"
              mb="7"
              py={1}
              gap={5}
              alignItems="center"
              _hover={{
                bgColor: '#D4CDF4',
                color: '#003249',
                borderRadius: '7px',
              }}
            >
              <Box pl={3}>
                <GrTransaction size="25px" />
              </Box>
              <Text fontSize="21px">Transaction</Text>
            </Box>
          </Link>
          <Link href="/dashboard/attendee-list">
            <Box
              display="flex"
              mb="7"
              py={1}
              gap={5}
              alignItems="center"
              _hover={{
                bgColor: '#D4CDF4',
                color: '#003249',
                borderRadius: '7px',
              }}
            >
              <Box pl={3}>
                <PiUserList size="25px" />
              </Box>
              <Text fontSize="21px">Attendee List</Text>
            </Box>
          </Link>
        </Flex>
      </Box>

      <Box h="100vh" w="100%" overflowY="auto">
        <NavbarDashboard />
        {children}
      </Box>
    </Flex>
  );
};

export default LayoutWrapper;
