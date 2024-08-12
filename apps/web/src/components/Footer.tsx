import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor="#003249">
      <Container maxW="7xl">
        <Box>
          <Grid templateColumns="1fr 1fr" py="70px">
            <GridItem>
              <Box maxW="500px">
                <Link href="/">
                  <Image src="/Logo_Festivity_3.svg" w="150px" />
                </Link>
                <Text mt={5} color="whitesmoke" align="justify">
                  Festivity adalah acara meriah yang menggabungkan berbagai
                  elemen hiburan, budaya, dan komunitas dalam satu perayaan
                  besar. Acara ini dirancang untuk menyatukan orang-orang dari
                  berbagai latar belakang untuk menikmati musik, tarian,
                  makanan, dan aktivitas lainnya.
                </Text>
              </Box>
              <Box mt="50px">
                <Heading color="whitesmoke" fontSize="2xl">
                  Tetap terhubung dengan kami
                </Heading>
                <Box mt="21px" display="flex" gap={3}>
                  <Image src="/Logo_Instagram.svg" w="35px" />
                  <Image src="/Logo_WhatsApp.svg" w="35px" />
                  <Image src="/Logo_Facebook.svg" w="35px" />
                </Box>
              </Box>
            </GridItem>
            <GridItem display="flex" gap={7}>
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize="2xl">
                  Acara
                </Heading>
                <Box mt={5}>
                  <Text color="whitesmoke">Penyelenggara</Text>
                  <Text color="whitesmoke">Daftar acara</Text>
                  <Text color="whitesmoke">Buat acara</Text>
                  <Text color="whitesmoke"></Text>
                </Box>
              </Container>
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize="2xl">
                  Festivity
                </Heading>
                <Box mt={5}>
                  <Link href="/about">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                    >
                      Tentang kami
                    </Text>
                  </Link>
                  <Link href="/privacy">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                    >
                      Kebijakan privasi
                    </Text>
                  </Link>
                  <Link href="/terms-condition">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                    >
                      Syarat & ketentuan
                    </Text>
                  </Link>
                </Box>
              </Container>
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize="2xl">
                  Bantuan
                </Heading>
                <Box mt={5}>
                  <Link href="/how-to-order/">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                    >
                      Cara pesan
                    </Text>
                  </Link>
                  <Link href="/how-to-payment">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                    >
                      Cara bayar
                    </Text>
                  </Link>
                </Box>
              </Container>
            </GridItem>
          </Grid>
        </Box>
        <Divider border="2px solid whitesmoke" />
        <Box py="25px">
          <Text textAlign="center" color="whitesmoke">
            Copyright © 2024 Festivity
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
