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

import { RegisterSchema } from './schemas/registerSchema';

const RegisterUserPage = () => {
  const { mutateAsync: register, isPending } = useRegister();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      roles: Role.Customer,
      referral: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await register(values);
    },
  });

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
          Register in to Festivity
        </Text>
        <form onSubmit={formik.handleSubmit}>
          {/* ini input nama */}
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="20px"
          />
          {!!formik.touched.name && !!formik.errors.name ? (
            <Text color="#E86B32">{formik.errors.name}</Text>
          ) : null}

          {/* ini input email */}
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="8px"
          />
          {!!formik.touched.email && !!formik.errors.email ? (
            <Text color="#E86B32">{formik.errors.email}</Text>
          ) : null}

          {/* ini input telpon */}
          <Input
            name="phone"
            type="number"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="8px"
          />
          {!!formik.touched.phone && !!formik.errors.phone ? (
            <Text color="#E86B32">{formik.errors.phone}</Text>
          ) : null}

          {/* ini input password */}
          <InputGroup mt="8px">
            <Input
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              pr="4.5rem"
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

          {/* ini input referral */}
          <Input
            name="referral"
            type="text"
            placeholder="Have referral code? input here"
            value={formik.values.referral}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="8px"
          />
          {!!formik.touched.referral && !!formik.errors.referral ? (
            <Text color="red">{formik.errors.referral}</Text>
          ) : null}

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
            mt="25px"
            w="100%"
          >
            {isPending ? 'Loading...' : 'Daftar'}
          </Button>
          <Text fontSize="xs" textAlign="center" mt="10px" color="#718096">
            Dengan masuk atau membuat akun, Anda menyetujui perjanjian pengguna
            kami dan mengakui kebijakan privasi kami
          </Text>

          {/* tombol daftar */}
          <Flex mt="15px" justify="center" gap="5px" fontSize="sm">
            <Text color="#718096">Sudah punya akun?</Text>
            <Link href="/login">
              <Text color="#006BB4">Masuk</Text>
            </Link>
          </Flex>
        </form>
      </Container>
    </Box>
  );
};

export default RegisterUserPage;
