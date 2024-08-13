import { Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const Transaksi = () => {
  return (
    <Box py="40px" bgColor="#F3F3F3">
      <Container maxW="7xl" bgColor="white">
        <Grid templateColumns="3fr 1fr 1fr 1fr " py="25px">
          <GridItem>
            <Text fontWeight="bold" fontSize="sm">
              Tiket Dipesan
            </Text>
            <Text py={7} fontSize="xl">
              Little Orchard Cider and Music Festival 2024 - VVIP
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="#718096" fontSize="sm">
              Harga Satuan
            </Text>
            <Text py={7} fontWeight="semibold">
              2.000.000
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="#718096" fontSize="sm">
              Jumlah
            </Text>
            <Text py={7} fontWeight="semibold">
              2
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text color="#718096" fontSize="sm">
              Subtotal Tiket
            </Text>
            <Text py={7} fontWeight="semibold">
              4.000.000
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Transaksi;
