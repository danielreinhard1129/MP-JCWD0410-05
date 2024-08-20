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
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { LoginSchema } from './schemas/LoginSchema';
import useLogin from '@/hooks/api/auth/useLogin';

const LoginPage = () => {
  const { mutateAsync: login, isPending } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });
  console.log(formik.errors);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
          Sign in to Festivity
        </Text>
        <form onSubmit={formik.handleSubmit}>
          {/* ini input email */}
          <Input
            name="email"
            type="email"
            placeholder="Your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="20px"
          />
          {!!formik.touched.email && !!formik.errors.email ? (
            <Text color="red">{formik.errors.email}</Text>
          ) : null}
          {/* ini input password */}
          <InputGroup mt="8px">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              name="password"
              placeholder="Your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <InputRightElement width="100px">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Sembunyikan' : 'Lihat'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!!formik.touched.password && !!formik.errors.password ? (
            <Text color="red">{formik.errors.password}</Text>
          ) : null}

          {/* forgot password */}
          <Link href="/lupa-password">
            <Text mt="15px" textAlign="end" fontSize="xs" color="#006BB4">
              Lupa password ?
            </Text>
          </Link>

          {/* tombol login */}
          <Button
            color="whitesmoke"
            fontWeight="bold"
            bgColor="#003249"
            borderRadius="lg"
            textAlign={'center'}
            disabled={isPending}
            type="submit"
            p="8px"
            mt="15px"
            w="100%"
          >
            {isPending ? 'Loading...' : 'Masuk'}
          </Button>
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
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
