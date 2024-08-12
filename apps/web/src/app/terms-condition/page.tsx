import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivity - Syarat dan Ketentuan',
  description: 'Experience Every Moment, Start Here',
};

const page = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Box py="50px">
          <Heading>Syarat dan Ketentuan</Heading>
          <Text mt="25px" align="justify">
            Berikut adalah syarat dan ketentuan yang berlaku untuk acara
            Festivity. Dengan membeli tiket dan/atau menghadiri acara ini, Anda
            dianggap telah membaca, memahami, dan menyetujui syarat dan
            ketentuan berikut:
          </Text>
          <Grid templateColumns="1fr 1fr" mt="50px">
            <GridItem m="auto">
              <Image src="/Icon_Pembelian Tiket.svg" w="150px" />
            </GridItem>
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Pembelian Tiket
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Tiket hanya dapat dibeli melalui situs resmi Festivity atau
                  gerai tiket resmi yang telah ditunjuk.
                </ListItem>
                <ListItem>
                  Tiket yang sudah dibeli tidak dapat dikembalikan atau ditukar
                  dengan uang tunai.
                </ListItem>
                <ListItem>
                  Tiket yang hilang atau dicuri tidak akan diganti.
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>

          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Akses dan Masuk
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Semua pengunjung harus menunjukkan tiket yang sah untuk masuk
                  ke area acara.
                </ListItem>
                <ListItem>
                  Pengunjung di bawah usia 18 tahun harus didampingi oleh orang
                  dewasa.
                </ListItem>
                <ListItem>
                  Festivity berhak menolak masuk atau mengeluarkan pengunjung
                  yang tidak mematuhi aturan atau berperilaku tidak pantas.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem m="auto">
              <Image src="/Icon_Akses Masuk.svg" w="150px" />
            </GridItem>
          </Grid>

          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Image src="/Icon_Keselamatan dan Keamanan.svg" w="150px" />
            </GridItem>
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Keselamatan dan Keamanan
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Demi keselamatan dan keamanan, semua pengunjung harus mematuhi
                  petunjuk dari panitia dan petugas keamanan.
                </ListItem>
                <ListItem>
                  Barang-barang terlarang seperti senjata tajam, bahan peledak,
                  dan narkotika tidak diperbolehkan di area acara.
                </ListItem>
                <ListItem>
                  Pengunjung bertanggung jawab atas barang-barang pribadi mereka
                  masing-masing. Panitia tidak bertanggung jawab atas kehilangan
                  atau kerusakan barang pribadi.
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>

          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Pengambilan Foto dan Video
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Dengan menghadiri Festivity, pengunjung memberikan izin kepada
                  panitia untuk mengambil foto dan video yang dapat digunakan
                  untuk keperluan promosi dan dokumentasi tanpa kompensasi lebih
                  lanjut.
                </ListItem>
                <ListItem>
                  Pengunjung dilarang menggunakan peralatan fotografi
                  profesional tanpa izin tertulis dari panitia.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem m="auto">
              <Image src="/Icon_Pengambilan Foto dan Video.svg" w="150px" />
            </GridItem>
          </Grid>

          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Image src="/Icon_Penyelenggaraan Acara.svg" w="150px" />
            </GridItem>
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Penyelenggaraan Acara
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Panitia berhak mengubah jadwal, lokasi, atau artis yang tampil
                  tanpa pemberitahuan sebelumnya.
                </ListItem>
                <ListItem>
                  Dalam hal terjadi force majeure (keadaan darurat di luar
                  kendali panitia), Festivity berhak membatalkan acara dan tidak
                  bertanggung jawab atas pengembalian biaya tiket.
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Kebijakan Privasi
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Informasi pribadi yang dikumpulkan selama proses pembelian
                  tiket akan dijaga kerahasiaannya dan hanya digunakan untuk
                  keperluan internal Festivity.
                </ListItem>
                <ListItem>
                  Pengunjung dapat menerima informasi promosi terkait acara
                  mendatang dari Festivity, kecuali jika memilih untuk tidak
                  menerimanya.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem m="auto">
              <Image src="/Icon_Kebijakan Privasi.svg" w="150px" />
            </GridItem>
          </Grid>
          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Image
                src="/Icon_Penolakan dan Pembatasan Tanggung Jawab.svg"
                w="150px"
              />
            </GridItem>
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Penolakan dan Pembatasan Tanggung Jawab
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Festivity tidak bertanggung jawab atas cedera, kehilangan,
                  atau kerusakan yang dialami oleh pengunjung selama acara
                  berlangsung.
                </ListItem>
                <ListItem>
                  Pengunjung menghadiri acara ini atas risiko mereka sendiri.
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
          <Grid templateColumns="1fr 1fr" mt="150px">
            <GridItem m="auto">
              <Heading fontSize="xl" textAlign="center">
                Perubahan Syarat dan Ketentuan
              </Heading>
              <UnorderedList styleType="circle" mt="25px">
                <ListItem>
                  Festivity berhak mengubah syarat dan ketentuan ini
                  sewaktu-waktu tanpa pemberitahuan sebelumnya.
                </ListItem>
                <ListItem>
                  Pengunjung disarankan untuk memeriksa syarat dan ketentuan ini
                  secara berkala.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem m="auto">
              <Image src="/Icon_Perubahan Syarat dan Ketentuan.svg" w="150px" />
            </GridItem>
          </Grid>

          <Text mt="150px">
            Dengan membeli tiket dan/atau menghadiri Festivity, Anda menyetujui
            semua syarat dan ketentuan yang tercantum di atas. Terima kasih atas
            perhatian dan kerjasamanya. Nikmati acara Festivity!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
