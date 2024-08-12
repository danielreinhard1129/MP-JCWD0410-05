import {
  Box,
  Container,
  Divider,
  Heading,
  Highlight,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivity - Cara Pesan',
  description: 'Experience Every Moment, Start Here',
};

const page = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Box py="50px">
          <Heading>Cara Memesan Tiket</Heading>
          <Box mt="15px">
            <OrderedList spacing={5}>
              <ListItem>
                <Highlight
                  query="Kunjungi Situs"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Kunjungi Situs Web Resmi Festivity.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Pilih Acara"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pilih Acara di halaman utama / eksplor, lalu cari dan klik
                  pada bagian acara yang ingin Anda datangi.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Pilih Tanggal dan Waktu"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pilih Tanggal dan Waktu yang tersedia untuk acara tersebut.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Pilih Jenis Tiket"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pilih Jenis Tiket yang ingin Anda beli (Reguler / VIP).
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Tentukan jumlah tiket"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Tentukan jumlah tiket yang ingin Anda beli. Pastikan sesuai
                  dengan kebutuhan Anda.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Isi Data Diri"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Isi Data Diri anda seperti nama, alamat email, dan nomor
                  telepon aktif. Pastikan data yang Anda masukkan benar.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Pilih Metode Pembayaran"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Pilih Metode Pembayaran yang Anda inginkan.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Lakukan Pembayaran"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Lakukan Pembayaran dan ikuti instruksi untuk menyelesaikan
                  pembayaran. Pastikan Anda menyimpan bukti pembayaran.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Konfirmasi Pemesanan"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Konfirmasi Pemesanan Setelah pembayaran selesai, Anda akan
                  menerima email konfirmasi yang berisi detail tiket dan
                  informasi acara. Simpan email ini sebagai bukti pemesanan.
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query="Cetak atau Simpan Tiket"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Cetak atau Simpan Tiket dan pastikan untuk mencetak atau
                  menyimpan tiket tersebut di ponsel Anda untuk ditunjukkan saat
                  acara.
                </Highlight>
              </ListItem>

              <ListItem>
                <Highlight
                  query="Datang ke Acara"
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: '7px',
                    bg: '#d0cd94',
                  }}
                >
                  Datang ke Acara, bawa tiket Anda, dan tunjukkan di pintu
                  masuk. Pastikan Anda datang tepat waktu dan siap untuk
                  menikmati festival!
                </Highlight>
              </ListItem>
            </OrderedList>

            <Divider mt="15px" border="1px solid black" />
            <Box pt="35px">
              <Text>
                Semoga panduan ini membantu Anda dalam memesan tiket untuk acara
                Festivity. Selamat menikmati acara!
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
