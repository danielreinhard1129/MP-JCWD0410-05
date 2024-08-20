import {
  Box,
  Container,
  Flex,
  Heading,
  Highlight,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivity - Cara Bayar',
  description: 'Experience Every Moment, Start Here',
};

const HowToPaymentPage = () => {
  return (
    <Box>
      <Container maxW={{ base: '100%', md: '7xl' }}>
        <Box py="50px">
          <Heading>Cara Pembayaran</Heading>
          <Box mt="25px">
            <OrderedList spacing={5}>
              <ListItem>
                <Highlight
                  query="Pendaftaran:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pendaftaran: Daftarkan diri Anda melalui situs resmi
                  Festivity. Isi formulir dengan data diri yang lengkap dan
                  benar.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Konfirmasi Pendaftaran:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Konfirmasi Pendaftaran:Setelah pendaftaran, Anda akan menerima
                  email konfirmasi yang berisi detail acara dan instruksi
                  pembayaran.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Pilih Metode Pembayaran:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pilih Metode Pembayaran: Pilih metode pembayaran yang Anda
                  inginkan dari pilihan yang tersedia.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Lakukan Pembayaran:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Lakukan Pembayaran: Ikuti instruksi untuk melakukan pembayaran
                  sesuai metode yang dipilih. Pastikan untuk mencantumkan nomor
                  referensi atau kode pembayaran yang diberikan dalam email
                  konfirmasi.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Konfirmasi Pembayaran:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Konfirmasi Pembayaran: Setelah pembayaran berhasil, kirimkan
                  bukti pembayaran melalui email atau upload di situs resmi
                  untuk diverifikasi.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Terima Tiket Elektronik:"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Terima Tiket Elektronik: Setelah pembayaran diverifikasi, Anda
                  akan menerima tiket elektronik melalui email yang dapat
                  dicetak atau ditunjukkan pada hari acara.
                </Highlight>
              </ListItem>
            </OrderedList>
            <Box mt="50px">
              <Heading fontSize="xl">Metode Pembayaran</Heading>
              <Flex align="center" gap={3} mt="15px">
                <Image src="/Logo_BCA.svg" w="75px" />
                <Text fontSize="19px">
                  1234567890 a.n PT Festival Activity Indonesia
                </Text>
              </Flex>
              <Flex align="center" gap={3} mt="15px">
                <Image src="/Logo_Mandiri.svg" w="75px" />
                <Text fontSize="19px">
                  0987654321 a.n PT Festival Activity Indonesia
                </Text>
              </Flex>
              <Flex align="center" gap={3} mt="15px">
                <Image src="/Logo_BNI.svg" w="75px" />
                <Text fontSize="19px">
                  5432167890 a.n PT Festival Activity Indonesia
                </Text>
              </Flex>
            </Box>
            <Text align="justify" mt="50px">
              Pastikan untuk menyimpan bukti pembayaran dan membawa tiket
              elektronik pada hari acara. Jika ada pertanyaan lebih lanjut,
              silakan hubungi layanan pelanggan kami melalui email atau nomor
              telepon yang tertera di situs resmi. Selamat menikmati acara Brand
              Festivity!
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowToPaymentPage;
