'use client';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  return (
    <Box alignContent={'center'} h="100vh">
      <Container
        maxW={{ base: 'sm', md: 'md' }}
        bgColor="#003249"
        p={4}
        display="flex"
        justifyContent="center"
        borderTopRadius="25px"
      >
        <Link href="/">
          <Image src="/Logo_Festivity_3.svg" w="100px" />
        </Link>
      </Container>
      <Container
        maxW={{ base: 'sm', md: 'md' }}
        boxShadow="xl"
        bg="white"
        pt="20px"
        pb="30px"
        borderBottomRadius="25px"
      >
        <Text fontSize="2xl" color="#003249" fontWeight="bold" align="center">
          Lupa Password
        </Text>

        {/* ini input email */}
        <Input placeholder="Email" mt="20px" />

        {/* tombol kirim */}
        <Link href="/">
          <Text
            color="whitesmoke"
            fontWeight="bold"
            bgColor="#003249"
            borderRadius="lg"
            textAlign={'center'}
            p="8px"
            mt="15px"
            w="100%"
          >
            Kirim
          </Text>
        </Link>
      </Container>
    </Box>
  );
};

export default ForgotPasswordPage;
