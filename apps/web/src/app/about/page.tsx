import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivity - Tentang Kami',
  description: 'Experience Every Moment, Start Here',
};

const AboutUs = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Box
          py={{ base: '30px', md: '50px' }}
          maxW={{ base: '100%', md: '7xl' }}
        >
          <Heading fontSize={{ base: 'xl', md: '4xl' }}>Tentang Kami</Heading>
          <Text
            mt={{ base: '10px', md: '25px' }}
            fontSize={{ base: 's', md: 'sm' }}
            align="justify"
          >
            Selamat datang di Festivity, perayaan tahunan yang didedikasikan
            untuk menyatukan komunitas melalui beragam kegiatan seni, budaya,
            dan hiburan. Festivity adalah tempat di mana kebahagiaan,
            kreativitas, dan kebersamaan bertemu dalam satu acara besar yang
            penuh warna dan keceriaan.
          </Text>
          <Box mt={{ base: '30px', md: '50px' }}>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              gap={7}
            >
              <GridItem>
                <Card boxShadow="md">
                  <CardBody py={{ base: '10px' }}>
                    <Heading
                      fontSize={{ base: 'lg', md: 'xl' }}
                      textAlign="center"
                    >
                      Misi Kami
                    </Heading>
                    <Text
                      mt={{ base: '10px', md: '15px' }}
                      align="justify"
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Misi kami adalah menciptakan pengalaman tak terlupakan
                      bagi setiap pengunjung melalui berbagai acara yang
                      menghibur dan mendidik. Kami percaya bahwa seni dan budaya
                      memiliki kekuatan untuk menyatukan orang-orang dari
                      berbagai latar belakang.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card boxShadow="md">
                  <CardBody py={{ base: '10px' }}>
                    <Heading
                      fontSize={{ base: 'lg', md: 'xl' }}
                      textAlign="center"
                    >
                      Visi Kami
                    </Heading>
                    <Text
                      mt={{ base: '10px', md: '15px' }}
                      align="justify"
                      fontSize={{ base: 's', md: 'sm' }}
                    >
                      Visi kami adalah menjadi acara tahunan terbesar dan paling
                      berpengaruh di Indonesia yang merayakan seni, budaya, dan
                      komunitas. Kami berkomitmen untuk terus menghadirkan
                      inovasi dan keunikan dalam setiap edisi Festivity,
                      sehingga selalu ada sesuatu yang baru dan menarik untuk
                      dinikmati oleh semua orang.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
          <Box mt={{ base: '30px', md: '50px' }}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }}>
              Apa yang Kami Tawarkan
            </Heading>
            <Box mt="15px">
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
                gap={{ base: '5', md: '7' }}
              >
                <GridItem>
                  <Card borderRadius="25px">
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        borderRadius="25px"
                      />
                      <Text
                        textAlign="center"
                        py={3}
                        fontWeight="semibold"
                        fontSize={{ base: 'lg', md: '19px' }}
                      >
                        Konser Musik
                      </Text>
                      <Text align="justify" fontSize={{ base: 's', md: 'sm' }}>
                        Kami menghadirkan penampilan musik dari berbagai genre
                        dan modern. Setiap penampilan dipilih dengan cermat
                        untuk memastikan kualitas terbaik dan memberikan
                        pengalaman yang mendalam bagi penonton.
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card borderRadius="25px">
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        borderRadius="25px"
                      />
                      <Text
                        textAlign="center"
                        py={3}
                        fontWeight="semibold"
                        fontSize={{ base: 'lg', md: '19px' }}
                      >
                        Pameran Seni Visual
                      </Text>
                      <Text align="justify" fontSize={{ base: 's', md: 'sm' }}>
                        Festivity menampilkan karya-karya seni visual dari
                        seniman lokal dan internasional. Mulai dari lukisan,
                        patung, hingga instalasi seni yang inovatif, semuanya
                        bisa dinikmati di pameran kami.
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card borderRadius="25px">
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        borderRadius="25px"
                      />
                      <Text
                        textAlign="center"
                        py={3}
                        fontWeight="semibold"
                        fontSize={{ base: 'lg', md: '19px' }}
                      >
                        Zona Kuliner
                      </Text>
                      <Text align="justify" fontSize={{ base: 's', md: 'sm' }}>
                        Kami menyajikan berbagai makanan dan minuman dari
                        penjuru nusantara dan internasional. Setiap hidangan
                        dipilih untuk mencerminkan kekayaan dan keberagaman
                        kuliner yang ada.
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </Box>
          </Box>
          <Box mt={{ base: '40px', md: '50px' }}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }}>Komitmen Kami</Heading>
            <Text mt="15px" align="justify" fontSize={{ base: 's', md: 'sm' }}>
              Kami berkomitmen untuk memberikan pengalaman yang aman, nyaman,
              dan menyenangkan bagi semua pengunjung. Keselamatan dan
              kesejahteraan Anda adalah prioritas utama kami. Tim kami bekerja
              keras untuk memastikan setiap detail acara terorganisir dengan
              baik dan sesuai dengan standar tertinggi.
            </Text>
          </Box>
          <Box mt={{ base: '30px', md: '50px' }}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }}>
              Bergabung dengan Kami
            </Heading>
            <Text mt="15px" align="justify" fontSize={{ base: 's', md: 'sm' }}>
              Kami mengundang Anda untuk bergabung dengan Festivity dan
              merasakan kebahagiaan yang kami tawarkan. Baik sebagai pengunjung,
              peserta, atau mitra, kontribusi Anda sangat berharga bagi
              kesuksesan acara ini. Mari kita bersama-sama menciptakan kenangan
              indah dan merayakan kebersamaan dalam Festivity.
            </Text>
          </Box>
          <Box mt="50px">
            <Heading fontSize={{ base: 'xl', md: 'xl' }}>Kontak Kami</Heading>
            <Flex align="center" gap={3} mt="15px">
              <FaSquarePhone size="25px" />
              <Text fontSize={{ base: 'sm', md: 'xl' }}>(021)-849562</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <MdEmail size="25px" />
              <Text fontSize={{ base: 'sm', md: 'xl' }}>
                sales@festivity.com
              </Text>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
