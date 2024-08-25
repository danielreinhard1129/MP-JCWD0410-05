'use client';
import useChangeStatusTransaction from '@/hooks/transaction/useChangeStatusTransaction';
import useGetTransactions from '@/hooks/transaction/useGetTransactions';
import {
  Button,
  Container,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { redirect, useParams } from 'next/navigation';

const TransactionsPage = () => {
  const { mutateAsync: changeStatus, isPending } = useChangeStatusTransaction();
  const { data } = useGetTransactions();
  const session = useSession();
  if (session.data?.user.roles !== 'Admin') {
    return redirect('/login');
  }
  return (
    <Container maxW="6xl" mt="70px">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th style={{ textAlign: 'center' }}>Nama Event</Th>
              <Th style={{ textAlign: 'center' }}>QTY</Th>
              <Th style={{ textAlign: 'center' }}>Total</Th>
              <Th style={{ textAlign: 'center' }}>Status</Th>
              <Th style={{ textAlign: 'center' }}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((transaction, index) => {
              return (
                <Tr key={transaction.id}>
                  <Td style={{ textAlign: 'center' }}>
                    {transaction.event.name}
                  </Td>
                  <Td style={{ textAlign: 'center' }}>{transaction.qty}</Td>
                  <Td style={{ textAlign: 'center' }}>{transaction.total}</Td>
                  <Td style={{ textAlign: 'center' }}>{transaction.status}</Td>
                  <Td>
                    <Flex gap={3} justify="center">
                      <Button
                        bgColor="#003249"
                        color="whitesmoke"
                        _hover={{
                          bgColor: '#003249',
                          color: 'whitesmoke',
                          transform: 'scale(1.1)',
                        }}
                        type="submit"
                        onClick={() =>
                          changeStatus({
                            status: 'done',
                            id: transaction.id,
                          })
                        }
                      >
                        {isPending ? 'Loading...' : 'Accepted'}
                      </Button>
                      <Button
                        bgColor="#D4CDF4"
                        _hover={{
                          bgColor: 'red',
                          color: 'whitesmoke',
                          transform: 'scale(1.1)',
                        }}
                        type="submit"
                        onClick={() =>
                          changeStatus({
                            status: 'rejected',
                            id: transaction.id,
                          })
                        }
                      >
                        Rejected
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TransactionsPage;
