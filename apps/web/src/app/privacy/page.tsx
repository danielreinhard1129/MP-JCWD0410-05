import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivity - Kebijakan Privasi',
  description: 'Experience Every Moment, Start Here',
};

const page = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Box py="50px">
          <Heading>Kebijakan Privasi</Heading>
          <Text mt="25px" align="justify">
            Kami di Festivity sangat menghargai privasi Anda dan berkomitmen
            untuk melindungi informasi pribadi Anda. Kebijakan privasi ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            informasi Anda ketika Anda menggunakan layanan kami atau mengunjungi
            situs web kami.
          </Text>
          <Box mt="50px">
            <Heading fontSize="xl">Informasi yang Kami Kumpulkan</Heading>
            <Text mt="15px" align="justify">
              Kami dapat mengumpulkan informasi pribadi Anda dalam berbagai
              cara, termasuk ketika Anda:
            </Text>
            <OrderedList>
              <ListItem>Mendaftar untuk acara atau layanan kami</ListItem>
              <ListItem>Membeli tiket acara</ListItem>
              <ListItem>Mengisi formulir kontak atau survei</ListItem>
              <ListItem>Berlangganan newsletter kami</ListItem>
            </OrderedList>
            <Text mt="15px" align="justify">
              Informasi yang kami kumpulkan mungkin termasuk, namun tidak
              terbatas pada:
            </Text>
            <OrderedList>
              <ListItem>Nama</ListItem>
              <ListItem>Alamat email</ListItem>
              <ListItem>Nomor telepon</ListItem>
              <ListItem>Alamat pos</ListItem>
              <ListItem>Informasi pembayaran</ListItem>
            </OrderedList>
            <Box mt="50px">
              <Heading fontSize="xl">
                Bagaimana Kami Menggunakan Informasi Anda
              </Heading>
              <Text mt="15px" align="justify">
                Informasi pribadi yang kami kumpulkan digunakan untuk berbagai
                tujuan, antara lain:
              </Text>
              <OrderedList>
                <ListItem>
                  Memproses pendaftaran dan pembelian tiket Anda
                </ListItem>
                <ListItem>Mengirimkan konfirmasi dan detail acara</ListItem>
                <ListItem>
                  Memberikan layanan pelanggan yang lebih baik
                </ListItem>
                <ListItem>
                  Mengirimkan informasi tentang acara mendatang, promosi, dan
                  penawaran khusus
                </ListItem>
                <ListItem>
                  Melakukan survei dan penelitian untuk meningkatkan layanan
                  kami
                </ListItem>
              </OrderedList>
            </Box>
            <Box mt="50px">
              <Heading fontSize="xl">
                Pengungkapan Informasi kepada Pihak Ketiga
              </Heading>
              <Text mt="15px" align="justify">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi
                pribadi Anda kepada pihak ketiga. Namun, kami dapat berbagi
                informasi dengan pihak ketiga tepercaya yang membantu kami dalam
                mengoperasikan situs web kami, menjalankan bisnis kami, atau
                melayani Anda, selama pihak-pihak tersebut setuju untuk menjaga
                kerahasiaan informasi ini.
              </Text>
            </Box>
            <Box mt="50px">
              <Heading fontSize="xl">Keamanan Informasi</Heading>
              <Text mt="15px" align="justify">
                Kami mengambil langkah-langkah keamanan yang wajar untuk
                melindungi informasi pribadi Anda dari akses, penggunaan, atau
                pengungkapan yang tidak sah. Ini termasuk langkah-langkah fisik,
                elektronik, dan prosedural untuk menjaga keamanan data Anda.
              </Text>
            </Box>
            <Box mt="50px">
              <Heading fontSize="xl">Hak Akses dan Kontrol Anda</Heading>
              <Text mt="15px" align="justify">
                Anda memiliki hak untuk:
              </Text>
              <OrderedList>
                <ListItem>
                  Mengakses dan memperbarui informasi pribadi Anda
                </ListItem>
                <ListItem>Meminta penghapusan informasi pribadi Anda</ListItem>
                <ListItem>
                  Menolak penggunaan informasi pribadi Anda untuk tujuan
                  pemasaran langsung
                </ListItem>
              </OrderedList>
              <Text mt="15px" align="justify">
                Jika Anda ingin menggunakan hak-hak ini, silakan hubungi kami
                melalui informasi kontak yang disediakan di bawah ini.
              </Text>
            </Box>
            <Box mt="50px">
              <Heading fontSize="xl">Perubahan pada Kebijakan Privasi</Heading>
              <Text mt="15px" align="justify">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu
                untuk mencerminkan perubahan dalam praktik kami atau peraturan
                yang berlaku. Kami akan memberitahu Anda tentang perubahan
                signifikan dengan memposting kebijakan yang diperbarui di situs
                web kami.
              </Text>
            </Box>
            <Box mt="50px">
              <Heading fontSize="xl">Kontak Kami</Heading>
              <Text mt="15px" align="justify">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang
                kebijakan privasi ini atau praktik privasi kami, silakan hubungi
                kami di:
              </Text>
              <Flex align="center" gap={3} mt="15px">
                <FaSquarePhone size="25px" />
                <Text>(021)-849562</Text>
              </Flex>
              <Flex align="center" gap={3}>
                <MdEmail size="25px" />
                <Text>sales@festivity.com</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
