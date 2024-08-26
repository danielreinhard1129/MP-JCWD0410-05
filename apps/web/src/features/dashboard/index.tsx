import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { MdOutlineFestival } from 'react-icons/md';
import { IoMdArrowDropright } from 'react-icons/io';
import { IoTicketOutline } from 'react-icons/io5';
import { RiDraftLine } from 'react-icons/ri';
import { CiMoneyBill } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';
import { FaPeopleGroup } from 'react-icons/fa6';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <Box>
      <Container maxW="6xl">
        <Grid templateColumns="1fr 1fr 1fr" gap="35px">
          <GridItem my="70px">
            {/* <Box boxShadow="base" p={5} border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <MdOutlineFestival size="21px" color="#E86B32" />
                  <Text>Event Aktif</Text>
                </Flex>
                <Link href="/dashboard/events">
                  <Flex align="center">
                    <Text color="#e86b32" fontWeight="medium">
                      Detail
                    </Text>
                    <IoMdArrowDropright color="#E86B32" />
                  </Flex>
                </Link>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">0</Text>
                <Text>Event</Text>
              </Flex>
            </Box> */}
            <Box boxShadow="base" p={5} mt="35px" border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <IoTicketOutline size="21px" color="#E86B32" />
                  <Text>Total Tiket Terjual</Text>
                </Flex>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">0</Text>
                <Text>Tiket</Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem my="70px">
            {/* <Box boxShadow="base" p={5} border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <RiDraftLine size="21px" color="#E86B32" />
                  <Text>Event Draf</Text>
                </Flex>
                <Link href="/dashboard/events">
                  <Flex align="center">
                    <Text color="#E86B32" fontWeight="medium">
                      Detail
                    </Text>
                    <IoMdArrowDropright color="#E86B32" />
                  </Flex>
                </Link>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">0</Text>
                <Text>Event</Text>
              </Flex>
            </Box> */}
            <Box boxShadow="base" p={5} mt="35px" border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <CiMoneyBill size="21px" color="#E86B32" />
                  <Text>Total Penjualan</Text>
                </Flex>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">Rp 0</Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem my="70px">
            {/* <Box boxShadow="base" p={5} border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <GrTransaction size="21px" color="#E86B32" />
                  <Text>Total Transaksi</Text>
                </Flex>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">0</Text>
              </Flex>
            </Box> */}
            <Box boxShadow="base" p={5} mt="35px" border="1px solid #B8BACF">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={3}>
                  <FaPeopleGroup size="21px" color="#E86B32" />
                  <Text>Total Pengunjung</Text>
                </Flex>
              </Flex>
              <Divider mt={5} />
              <Flex align="baseline" gap={3}>
                <Text fontSize="50px">0</Text>
                <Text>Orang</Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;
