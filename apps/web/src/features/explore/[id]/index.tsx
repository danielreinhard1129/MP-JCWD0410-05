'use client';
import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/react';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { FC, useState } from 'react';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { CiBank } from 'react-icons/ci';
import useCreateTransaction from '@/hooks/api/transaction/useCreateTransaction';
import { useFormik } from 'formik';
import { createTransactionSchema } from '../schemas/CreateTransactionSchema';

interface DetaiEventPageProps {
  eventId: number;
}

const DetailEventPage: FC<DetaiEventPageProps> = ({ eventId }) => {
  const [value, setValue] = useState(1);

  console.log('eventId', eventId);

  // Panggil useGetEvent di awal tanpa kondisi
  const { data, isPending } = useGetEvent(eventId);

  // Panggil hooks lain seperti useFormik di awal
  const { mutateAsync: createTransaction } = useCreateTransaction();

  const maxQuantity =
    data?.quota && data?.booked !== undefined ? data.quota - data.booked : 0;

  const formik = useFormik({
    initialValues: {
      qty: 1,
      payment_method: '',
      eventId: eventId,
    },
    validationSchema: createTransactionSchema(maxQuantity),
    onSubmit: async (values) => {
      await createTransaction(values);
    },
  });

  // Logic untuk loading dan notFound tetap ada setelah hooks dipanggil
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return notFound();
  }

  const handleChange = (value: any) => {
    setValue(value);
    formik.setFieldValue('qty', value); // Update qty in formik
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Container
          maxW={{ base: '100%', md: '7xl' }}
          py={{ base: '60px', md: '100px' }}
        >
          <Grid
            templateColumns={{ base: 'none', md: '1fr 1fr' }}
            gap={{ base: '5', md: '10' }}
          >
            <GridItem alignItems="center">
              <Image
                src={data.thumbnail}
                width={'full'}
                height={'350'}
                alt="event"
                objectFit="cover"
                borderRadius="25px"
              ></Image>
            </GridItem>
            <GridItem>
              <Card p={7} borderRadius="25px" shadow="lg" gap={1} height="full">
                <Heading fontSize="2xl" mt="10px">
                  {data.name}
                </Heading>
                <Flex mt="35px" gap={3} pl="2px" align="center">
                  <FaCalendarDays color="#003249" />
                  <Text fontSize="sm">
                    {format(new Date(data.start_date), 'dd MMMMMMMMMMMMM yyyy')}
                  </Text>
                  <Text fontSize="sm">-</Text>
                  <Text fontSize="sm">
                    {format(new Date(data.end_date), 'dd MMMMMMMMMMMMM yyyy')}
                  </Text>
                </Flex>
                <Flex gap={3} align="center">
                  <FaLocationDot color="#EB493B" size="18px" />
                  <Text fontSize="sm">{data.location}</Text>
                </Flex>
                <Box position="relative" mt="50px">
                  <Divider borderWidth="1px" borderColor="black" />
                  <AbsoluteCenter
                    bg="white"
                    px="3"
                    fontSize="xs"
                    color="#8E919B"
                  >
                    Diselenggarakan oleh
                  </AbsoluteCenter>
                </Box>
                <Text mt="40px" fontWeight="bold" align="center">
                  {data.user.name}
                </Text>
              </Card>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: 'none', md: '1fr 1fr' }}
            mt="70px"
            gap={10}
          >
            <GridItem>
              <Text fontWeight="bold" textAlign="center">
                Deskripsi
              </Text>
              <Divider borderWidth="1px" borderColor="black" />
              <Card p={7} borderRadius="10px" shadow="lg" mt="10px">
                <Text textAlign="justify">{data.description}</Text>
              </Card>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold" textAlign="center">
                Tiket
              </Text>
              <Divider borderWidth="1px" borderColor="black" />
              <Card
                p={7}
                borderRadius="10px"
                borderColor="#E86B32"
                borderWidth="2px"
                mt="10px"
              >
                <Text fontWeight="bold">{data.name}</Text>
                <Flex mt="10px" gap={3} align="center">
                  <FaCalendarDays color="#003249" />
                  <Text fontSize="sm">Berakhir pada</Text>
                  <Text fontSize="sm">
                    {format(new Date(data.end_date), 'dd MMMMMMMMMMMMM yyyy')}
                  </Text>
                </Flex>
                <Divider borderWidth="1px" borderColor="#E86B32" mt="5px" />
                <Flex justify="space-between" align="center">
                  <Text
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="bold"
                    mt={7}
                  >
                    Rp {data.price * value}
                  </Text>
                  <Flex gap={5} align="center">
                    <NumberInput
                      size="sm"
                      w="60px"
                      defaultValue={1}
                      max={5}
                      min={1}
                      mt={7}
                      h="full"
                      value={value}
                      onChange={handleChange}
                    >
                      <NumberInputField borderColor="#E86B32" />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          bg="#D4CDF4"
                          _active={{ bg: '#E86B32' }}
                          children="+"
                        />
                        <NumberDecrementStepper
                          bg="pink.200"
                          _active={{ bg: '#E86B32' }}
                          children="-"
                        />
                      </NumberInputStepper>
                    </NumberInput>
                    <Button
                      fontSize={{ base: 'md', md: 'xl' }}
                      fontWeight="bold"
                      bgColor="#E86B32"
                      color="white"
                      mt={7}
                      py={1}
                      px={3}
                      borderRadius="10px"
                      type="submit"
                      _hover={{
                        borderColor: '#E3E7EA',
                        bgColor: '#E3E7EA',
                        color: 'black',
                      }}
                    >
                      {isPending ? (
                        <div className="flex justify-center gap-2">
                          ...Loading
                        </div>
                      ) : (
                        'Beli Tiket'
                      )}
                    </Button>
                  </Flex>
                </Flex>
              </Card>
              <Divider borderWidth="1px" borderColor="black" mt={5} />
              <Flex align="center" gap={5} mt={3}>
                <Text fontWeight="bold" fontSize="sm">
                  Metode pembayaran
                </Text>
                <Select
                  w="180px"
                  icon={<CiBank size="25px" color="#718096" />}
                  placeholder="Transfer Bank"
                  borderRadius="10px"
                  outline="black"
                  name="payment_method"
                  value={formik.values.payment_method}
                  onChange={formik.handleChange}
                >
                  <option value="QRIS">QRIS</option>
                  <option value="Bank_Transfer">Bank Transfer</option>
                </Select>
              </Flex>
              <Divider borderWidth="1px" borderColor="black" mt={5} />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </form>
  );
};

export default DetailEventPage;
