'use client';
import useGetTransactions from '@/hooks/transaction/useGetTransactions';
import {
  Box,
  Button,
  Container,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { event } from 'cypress/types/jquery';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const TransactionsPage = () => {
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
                  <Td style={{ textAlign: 'center' }}>{transaction.name}</Td>
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
                      >
                        Accepted
                      </Button>
                      <Button
                        bgColor="#D4CDF4"
                        _hover={{
                          bgColor: 'red',
                          color: 'whitesmoke',
                          transform: 'scale(1.1)',
                        }}
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
