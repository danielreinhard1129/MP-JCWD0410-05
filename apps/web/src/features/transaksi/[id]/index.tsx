'use client';
import useGetTransaction from '@/hooks/api/transaction/useGetTransaction';
import useUpdateTransaction from '@/hooks/api/transaction/useUpdateTransaction';
import { Status, StatusPayment } from '@/types/transaction';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { FC, useState } from 'react';

const TransactionDetailsPage = () => {
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const { id: transactionId } = useParams<{ id: string }>();
  const { data, isPending } = useGetTransaction(transactionId);
  const { mutateAsync: updateTransaction, isPending: isLoading } =
    useUpdateTransaction(Number(transactionId));

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPaymentProof(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (paymentProof) {
      await updateTransaction({
        payment_proof: paymentProof,
        status: StatusPayment.waiting_for_admin_confirmation,
      });
    } else {
      alert('Please select a payment proof file');
    }
  };

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
        <Grid
          templateColumns={{ base: '1fr 1fr', md: '5fr 1fr' }}
          alignItems="center"
        >
          <Text textAlign="end" pr={5} color="gray.500" fontSize="sm">
            Status :
          </Text>
          <Text align="center" color="orange.500" fontSize="lg">
            {data?.status}
          </Text>
        </Grid>
        <Divider borderWidth="1px" borderColor="gray.200" />

        {/* metode pambayaran dan bayar */}
        <Grid templateColumns={{ base: '1fr', md: '5fr 1fr' }}>
          <Flex my={5} align="center" gap={{ base: '3', md: '5' }}></Flex>
          {/* bayar */}
          <Flex my={{ base: '3', md: '5' }} justifyContent="center">
            <Box mt={4}>
              <Input type="file" onChange={handleFileChange} mb={2} w="full" />
              <Button
                type="submit"
                onClick={handleSubmit}
                isLoading={isLoading}
                w="full"
                rounded="md"
                bg="blue.600"
                color="white"
                _hover={{ bg: 'blue.700' }}
                _disabled={{ bg: 'blue.300' }}
                isDisabled={isLoading}
              >
                {isLoading ? 'Uploading...' : 'Upload Payment Proof'}
              </Button>
            </Box>
            {/* {paymentImage ? ( */}
            {/* <>
                <Box position="relative" height="200px" width="100%">
                  <Image
                    src={paymentImage}
                    alt="Payment proof"
                    objectFit="cover"
                  />
                </Box>
                <Button
                  fontSize="md"
                  fontWeight="bold"
                  color="white"
                  py={2}
                  px={5}
                  borderRadius="10px"
                  width="100%"
                  bgColor="orange.500"
                  _hover={{
                    borderColor: 'gray.200',
                    bgColor: 'gray.200',
                    color: 'black',
                  }}
                  onClick={removeSelectedImage}
                >
                  Remove
                </Button>
                <Button
                  mt={2}
                  width="100%"
                  bg="green.500"
                  _hover={{ bg: 'green.600' }}
                  onClick={handleSubmit}
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </>
            ) : (
              <Button
                width="100%"
                bg="#0080ff"
                _hover={{ bg: '#0066CC' }}
                onClick={handleFileUpload}
                isDisabled={isPending}
              >
                Upload Payment Proof
              </Button>
            )}
            <Input
              type="file"
              ref={fileInputRef}
              display="none"
              onChange={onChangePaymentProof}
            /> */}
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransactionDetailsPage;

{
  /* <Button
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
</Button> */
}
