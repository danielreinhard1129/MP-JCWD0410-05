'use client';
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
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const pathname = usePathname();

  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/lupa-password' ||
    pathname === '/reset-password' ||
    pathname.startsWith('/dashboard')
  ) {
    return null;
  }
  return (
    <Box bgColor="#003249">
      <Container maxW="7xl">
        <Box>
          <Grid
            templateColumns={{ base: 'none', md: '1fr 1fr' }}
            py={{ base: '30px', md: '70px' }}
          >
            <GridItem>
              <Box maxW={{ base: '100%', md: '500px' }}>
                <Link href="/">
                  <Image
                    src="/Logo_Festivity_3.svg"
                    w={{ base: '100px', md: '150px' }}
                  />
                </Link>
                <Text
                  mt={5}
                  color="whitesmoke"
                  align="justify"
                  fontSize={{ base: 's', md: 'sm' }}
                >
                  Festivity adalah acara meriah yang menggabungkan berbagai
                  elemen hiburan, budaya, dan komunitas dalam satu perayaan
                  besar. Acara ini dirancang untuk menyatukan orang-orang dari
                  berbagai latar belakang untuk menikmati musik, tarian,
                  makanan, dan aktivitas lainnya.
                </Text>
              </Box>
              <Box mt={{ base: '20px', md: '50px' }}>
                <Heading
                  color="whitesmoke"
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  Tetap terhubung dengan kami
                </Heading>
                <Box mt={{ base: '10px', md: '20px' }} display="flex" gap={3}>
                  <Image src="/Logo_Instagram.svg" w="35px" />
                  <Image src="/Logo_WhatsApp.svg" w="35px" />
                  <Image src="/Logo_Facebook.svg" w="35px" />
                </Box>
              </Box>
            </GridItem>
            <GridItem
              display={{ base: 'grid', md: 'flex' }}
              gap={7}
              mt={{ base: '20px', md: '0px' }}
            >
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize={{ base: 'xl', md: '2xl' }}>
                  Acara
                </Heading>
                <Box
                  mt={{ base: '0', md: '5' }}
                  fontSize={{ base: 's', md: 'sm' }}
                >
                  <Text color="whitesmoke">Penyelenggara</Text>
                  <Text color="whitesmoke">Daftar acara</Text>
                  <Link href="/dashboard/register">
                    <Text color="whitesmoke">Buat acara</Text>
                  </Link>
                  <Text color="whitesmoke"></Text>
                </Box>
              </Container>
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize={{ base: 'xl', md: '2xl' }}>
                  Festivity
                </Heading>
                <Box mt={{ base: '0', md: '5' }}>
                  <Link href="/about">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Tentang kami
                    </Text>
                  </Link>
                  <Link href="/privacy">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Kebijakan privasi
                    </Text>
                  </Link>
                  <Link href="/terms-condition">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Syarat & ketentuan
                    </Text>
                  </Link>
                </Box>
              </Container>
              <Container lineHeight={7}>
                <Heading color="#D0CD94" fontSize={{ base: 'xl', md: '2xl' }}>
                  Bantuan
                </Heading>
                <Box mt={{ base: '0', md: '5' }}>
                  <Link href="/how-to-order/">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Cara pesan
                    </Text>
                  </Link>
                  <Link href="/how-to-payment">
                    <Text
                      color="whitesmoke"
                      _hover={{ color: '#D4CDF4', fontWeight: 'semibold' }}
                      fontSize={{ base: 's', md: 'sm' }}
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
        <Box py={{ base: '10px', md: '25px' }}>
          <Text
            textAlign="center"
            color="whitesmoke"
            fontSize={{ base: 'xs', md: 'sm' }}
          >
            Copyright © 2024 Festivity
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
