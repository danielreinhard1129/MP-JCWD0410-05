'use client';
import useGetTransaction from '@/hooks/api/transaction/useGetTransaction';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { FC } from 'react';

const TransactionDetailsPage = () => {
  const { id: transactionId } = useParams<{ id: string }>();
  const { data, isPending } = useGetTransaction(transactionId);

  if (isPending) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return notFound();
  }

  return (
    <Box py="40px" bgColor="gray.100">
      <Container maxW={{ base: '100%', md: '7xl' }} bgColor="white" p={7}>
        <Grid templateColumns={{ base: '1fr', md: '4fr 2fr 2fr 2fr' }}>
          <GridItem>
            <Text fontWeight="bold" fontSize="sm">
              Tiket Dipesan
            </Text>
            <Text py={7} fontSize="xl">
              {data?.event.name}
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="gray.500" fontSize="sm">
              Harga Satuan
            </Text>
            <Text py={7} fontWeight="semibold">
              {data?.price}
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="gray.500" fontSize="sm">
              Jumlah
            </Text>
            <Text py={7} fontWeight="semibold">
              {data.qty}
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="gray.500" fontSize="sm">
              Subtotal Tiket
            </Text>
            <Text py={7} fontWeight="semibold">
              {data?.total}
            </Text>
          </GridItem>
        </Grid>
        <Divider borderWidth="1px" borderColor="gray.200" />

        {/* total pesanan */}
        <Grid
          templateColumns={{ base: '1fr 1fr', md: '5fr 1fr' }}
          py="30px"
          alignItems="center"
        >
          <Text textAlign="end" pr={5} color="gray.500" fontSize="sm">
            Total pesanan :
          </Text>
          <Text
            align="center"
            fontWeight="bold"
            color="orange.500"
            fontSize="xl"
          >
            Rp {data?.total}
          </Text>
        </Grid>
        <Divider borderWidth="1px" borderColor="gray.200" />

        {/* metode pambayaran dan bayar */}
        <Grid templateColumns={{ base: '1fr', md: '5fr 1fr' }}>
          <Flex my={5} align="center" gap={{ base: '3', md: '5' }}>
            {/* qris */}
            {/* <Link href="/transaksi">
              <Text
                border="1px"
                borderColor="gray.200"
                borderRadius="10px"
                py={2}
                px={3}
              >
                QRIS
              </Text>
            </Link> */}
          </Flex>
          {/* bayar */}
          <Flex my={{ base: '3', md: '5' }} justifyContent="center">
            <Link href="/transaksi">
              <Button
                fontSize="md"
                fontWeight="bold"
                bgColor="orange.500"
                color="white"
                py={2}
                px={5}
                borderRadius="10px"
                _hover={{
                  borderColor: 'gray.200',
                  bgColor: 'gray.200',
                  color: 'black',
                }}
              >
                Upload Proof of Payment
              </Button>
            </Link>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransactionDetailsPage;
