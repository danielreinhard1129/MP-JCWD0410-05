'use client';
import {
  Box,
  Button,
  Container,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { FC } from 'react';
import { ChangePasswordSchema } from './schemas/changePasswordSchema';
import useChangePassword from '@/hooks/api/auth/useChangePassword';

const ChangePasswordPage = () => {
  const { mutateAsync: changePassword, isPending } = useChangePassword();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values) => {
      await changePassword(values);
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
          Ubah Password
        </Text>
        <form onSubmit={formik.handleSubmit}>
          {/* ini input email */}
          <InputGroup mt="8px">
            <Input
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Password Baru"
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
          <InputGroup mt="8px">
            <Input
              name="confirmPassword"
              type={show ? 'text' : 'password'}
              placeholder="Konfirmasi Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputRightElement width="100px">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Sembunyikan' : 'Lihat'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!!formik.touched.confirmPassword &&
          !!formik.errors.confirmPassword ? (
            <Text color="red">{formik.errors.confirmPassword}</Text>
          ) : null}

          {/* tombol kirim */}
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
            {isPending ? 'Loading...' : 'Kirim'}
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ChangePasswordPage;
