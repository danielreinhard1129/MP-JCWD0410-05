'use client';
import { Box, Container, Image } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../app/style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Jumbotron = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              boxSize="400px"
              width="100%"
              mt="70px"
              borderRadius="25px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="jumbotron"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              boxSize="400px"
              width="100%"
              mt="70px"
              borderRadius="25px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="jumbotron"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              boxSize="400px"
              width="100%"
              mt="70px"
              borderRadius="25px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="jumbotron"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              boxSize="400px"
              width="100%"
              mt="70px"
              borderRadius="25px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="jumbotron"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              boxSize="400px"
              width="100%"
              mt="70px"
              borderRadius="25px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="jumbotron"
            ></Image>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Jumbotron;
