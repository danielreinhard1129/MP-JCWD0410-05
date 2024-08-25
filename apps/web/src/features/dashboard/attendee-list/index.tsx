'use client';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import useGetAttendeeList from '@/hooks/attendee-list/useGetAttendeeList';
import useGetEventList from '@/hooks/attendee-list/useGetEventList';
import {
  Box,
  Container,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdEmojiEvents } from 'react-icons/md';

const AttendeeListPage = () => {
  const session = useSession();
  const [eventId, setEventId] = useState<number | undefined>(undefined);

  const { data: events } = useGetEvents({
    userId: session.data?.user.id,
    take: 100,
  });

  const { data: attendeeList } = useGetAttendeeList({ eventId });

  return (
    <Container maxW="6xl" mt="70px">
      <Flex align="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack>
              {/* <Avatar size={'md'} /> */}
              <MdEmojiEvents size="23px" />
              <Text>Event</Text>
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="m" fontWeight="semibold"></Text>
                <Text fontSize="s" color="#E86B32" fontWeight="medium"></Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setEventId(undefined)}>All</MenuItem>
            {events?.data.map((event) => {
              return (
                <MenuItem onClick={() => setEventId(event.id)}>
                  {event.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>
      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th style={{ textAlign: 'center' }}>Nama</Th>
              <Th style={{ textAlign: 'center' }}>ticket quantity</Th>
              <Th style={{ textAlign: 'center' }}>total price paid</Th>
            </Tr>
          </Thead>
          <Tbody>
            {attendeeList?.data.map((list) => {
              return (
                <Tr key={list.id}>
                  <Td style={{ textAlign: 'center' }}>{list.user.name}</Td>
                  <Td style={{ textAlign: 'center' }}>{list.qty}</Td>
                  <Td style={{ textAlign: 'center' }}>{list.total}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AttendeeListPage;
