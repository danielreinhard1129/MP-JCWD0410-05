'use client';
import Pagination from '@/components/Pagination';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import useGetAttendeeList from '@/hooks/attendee-list/useGetAttendeeList';
import {
  Box,
  Container,
  Flex,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const AttendeeListPage = () => {
  const session = useSession();
  const [eventId, setEventId] = useState<number | undefined>(undefined);
  const [page, setPage] = useState(1);
  const { data: events, isPending } = useGetEvents({
    userId: session.data?.user.id,
    take: 100,
  });
  const { data: attendeeList } = useGetAttendeeList({ eventId, page, take: 5 });
  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!attendeeList) {
    return <h1 className="text-center">Daftar Pengunjung tidak ditemukan</h1>;
  }

  return (
    <Container maxW="6xl" mt="70px">
      <Flex align="center">
        <Select
          placeholder="Select event"
          onChange={(e) => {
            if (e.target.value) {
              setEventId(Number(e.target.value));
            } else {
              setEventId(undefined);
            }
          }}
          maxW="200px"
        >
          <option value="">all</option>;
          {events?.data.map((event) => {
            return <option value={event.id}>{event.name}</option>;
          })}
        </Select>
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
      <Pagination
        total={attendeeList.meta.total}
        take={attendeeList.meta.take}
        onPageChange={onPageChange}
        page={page}
      />
    </Container>
  );
};

export default AttendeeListPage;
