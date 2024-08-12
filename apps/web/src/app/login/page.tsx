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
import Link from 'next/link';
import React from 'react';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box alignContent={'center'} h="100vh">
      <Container
        w="md"
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
        maxW="md"
        boxShadow="xl"
        bg="white"
        pt="20px"
        pb="30px"
        borderBottomRadius="25px"
      >
        <Text fontSize="2xl" color="#003249" fontWeight="bold" align="center">
          Sign in to Festivity
        </Text>

        {/* ini input email */}
        <Input placeholder="Email" mt="20px" />

        {/* ini input password */}
        <InputGroup mt="8px">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="100px">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Sembunyikan' : 'Lihat'}
            </Button>
          </InputRightElement>
        </InputGroup>

        {/* tombol login */}
        <Link href="/">
          <Text
            color="whitesmoke"
            fontWeight="bold"
            bgColor="#003249"
            borderRadius="lg"
            textAlign={'center'}
            p="8px"
            mt="25px"
            w="100%"
          >
            Masuk
          </Text>
        </Link>
        <Text fontSize="xs" textAlign="center" mt="10px" color="#718096">
          Dengan masuk atau membuat akun, Anda menyetujui perjanjian pengguna
          kami dan mengakui kebijakan privasi kami
        </Text>

        {/* tombol daftar */}
        <Flex mt="15px" justify="center" gap="5px" fontSize="sm">
          <Text color="#718096">Belum punya akun?</Text>
          <Link href="/register">
            <Text color="#006BB4">Buat akun</Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Login;
