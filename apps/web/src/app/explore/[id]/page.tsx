import {
  AbsoluteCenter,
  Box,
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
  Text,
} from '@chakra-ui/react';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { Divider } from '@chakra-ui/react';
import Link from 'next/link';

const DetailEvent = () => {
  return (
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
              src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={'full'}
              height={'350'}
              alt="event"
              objectFit="cover"
              borderRadius="25px"
            ></Image>
          </GridItem>
          <GridItem>
            <Card p={7} borderRadius="25px" shadow="lg" gap={1} height="full">
              <Heading fontSize="xl" mt="10px">
                Little Orchard Cider and Music Festival 2024
              </Heading>
              <Flex mt="15px" gap={3} pl="2px" align="center">
                <FaCalendarDays color="#003249" />
                <Text fontSize="sm">27 Sep - 29 Sep 2024</Text>
              </Flex>
              <Flex gap={3} pl="2px" align="center">
                <FaClock color="#003249" />
                <Text fontSize="sm">17:00 - 17:00 WIB</Text>
              </Flex>
              <Flex gap={3} align="center">
                <FaLocationDot color="#EB493B" size="18px" />
                <Text fontSize="sm">Tennis Indoor Senayan</Text>
              </Flex>
              <Box position="relative" mt="50px">
                <Divider borderWidth="1px" borderColor="black" />
                <AbsoluteCenter bg="white" px="3" fontSize="xs" color="#8E919B">
                  Diselenggarakan oleh
                </AbsoluteCenter>
              </Box>
              <Text mt="40px" fontWeight="bold" align="center">
                Purwadhika Digital School
              </Text>
            </Card>
          </GridItem>
        </Grid>
        {/* ini deskripsi */}
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
              <Text textAlign="justify">
                MotoGP is a premier motorcycle racing championship that features
                highly skilled riders from around the world competing on
                purpose-built racing motorcycles. It is considered the pinnacle
                of motorcycle road racing and attracts a large global audience.
                The championship consists of a series of races held on various
                circuits worldwide, where riders showcase their speed, agility,
                and racing prowess. MotoGP motorcycles are technologically
                advanced, reaching high speeds and showcasing cutting-edge
                engineering. The championship is known for its intense
                competition, thrilling overtakes, and a showcase of rider skill
                and bravery.
              </Text>
              {/* syarat dan ketentuan */}
              <Text fontWeight="bold" mt="20px" py={2}>
                Syarat & Ketentuan
              </Text>
              <Text textAlign="justify" py={1}>
                1. Tiket hanya dapat dibeli melalui themandalikagp.com dan
                partner OTA/Ticketing yang tertera secara official pada laman
                website resmi pembelian tiket. Kami tidak bertanggung jawab
                untuk konsekuensi yang dialami atas pembelian di luar partner
                official website. Tiket hanya dapat digunakan untuk masuk ke
                Pertamina Grand Prix of Indonesia 2024.
              </Text>
              <Text textAlign="justify" py={1}>
                2. Pembelian tiket harus menggunakan kartu identitas yang valid.
                Pastikan pembelian tiket dilakukan dengan data yang valid dan
                benar (Kartu Identitas/KK/KTP/SIM/Paspor). Tiket tidak dapat
                diubah setelah pembelian.
              </Text>
              <Text textAlign="justify" py={1}>
                3. Dengan membeli tiket untuk event Pertamina Grand Prix of
                Indonesia 2024, Anda setuju untuk pengumpulan, penyimpanan, dan
                penggunaan terbatas pada data pribadi Anda untuk keperluan
                tersebut.
              </Text>
              <Text textAlign="justify" py={1}>
                4. Pembeli tiket yang akan hadir ke acara wajib memiliki email
                valid dan aktif.
              </Text>
              <Text textAlign="justify" py={1}>
                5. QR Code untuk memasuki area event akan tersedia 7 hari
                sebelum event.
              </Text>
              <Text textAlign="justify" py={1}>
                7. Penonton harus berusia 6 tahun atau lebih. Penonton berusia
                dibawah usia 6 tahun tidak diperkenankan memasuki area.
              </Text>
            </Card>
          </GridItem>
          {/* ini tiket */}
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
              <Text fontWeight="bold">
                Little Orchard Cider and Music Festival 2024 - VVIP
              </Text>
              <Flex mt="10px" gap={3} align="center">
                <FaCalendarDays color="#003249" />
                <Text fontSize="sm">Berakhir pada 29 Sep 2024</Text>
              </Flex>
              <Divider borderWidth="1px" borderColor="#E86B32" mt="5px" />
              <Flex justify="space-between" align="center">
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  mt={7}
                >
                  Rp 2.000.000
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
                  <Link href="/transaksi">
                    <Text
                      fontSize={{ base: 'md', md: 'xl' }}
                      fontWeight="bold"
                      bgColor="#E86B32"
                      color="white"
                      mt={7}
                      py={1}
                      px={3}
                      borderRadius="10px"
                      _hover={{
                        borderColor: '#E3E7EA',
                        bgColor: '#E3E7EA',
                        color: 'black',
                      }}
                    >
                      Beli Tiket
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Card>
            <Card
              p={7}
              borderRadius="10px"
              borderColor="#E86B32"
              borderWidth="2px"
              mt="10px"
            >
              <Text fontWeight="bold">
                Little Orchard Cider and Music Festival 2024 - VIP
              </Text>
              <Flex mt="10px" gap={3} align="center">
                <FaCalendarDays color="#003249" />
                <Text fontSize="sm">Berakhir pada 29 Sep 2024</Text>
              </Flex>
              <Divider borderWidth="1px" borderColor="#E86B32" mt="5px" />
              <Flex justify="space-between" align="center">
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  mt={7}
                >
                  Rp 1.500.000
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
                  <Link href="/transaksi">
                    <Text
                      fontSize={{ base: 'md', md: 'xl' }}
                      fontWeight="bold"
                      bgColor="#E86B32"
                      color="white"
                      mt={7}
                      py={1}
                      px={3}
                      borderRadius="10px"
                      _hover={{
                        borderColor: '#E3E7EA',
                        bgColor: '#E3E7EA',
                        color: 'black',
                      }}
                    >
                      Beli Tiket
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Card>
            <Card
              p={7}
              borderRadius="10px"
              borderColor="#E86B32"
              borderWidth="2px"
              mt="10px"
            >
              <Text fontWeight="bold">
                Little Orchard Cider and Music Festival 2024 - Reguler
              </Text>
              <Flex mt="10px" gap={3} align="center">
                <FaCalendarDays color="#003249" />
                <Text fontSize="sm">Berakhir pada 29 Sep 2024</Text>
              </Flex>
              <Divider borderWidth="1px" borderColor="#E86B32" mt="5px" />
              <Flex justify="space-between" align="center">
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  mt={7}
                >
                  Rp 1.000.000
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
                  <Link href="/transaksi">
                    <Text
                      fontSize={{ base: 'md', md: 'xl' }}
                      fontWeight="bold"
                      bgColor="#E86B32"
                      color="white"
                      mt={7}
                      py={1}
                      px={3}
                      borderRadius="10px"
                      _hover={{
                        borderColor: '#E3E7EA',
                        bgColor: '#E3E7EA',
                        color: 'black',
                      }}
                    >
                      Beli Tiket
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailEvent;
