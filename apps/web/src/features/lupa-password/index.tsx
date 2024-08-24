'use client';
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';
import { Box, Button, Container, Image, Input, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { ForgotPasswordSchema } from './schemas/ForgotPasswordSchema';

const ForgotPasswordPage = () => {
  const { mutateAsync: forgotPassword, isPending } = useForgotPassword();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      await forgotPassword(values);
    },
  });
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
        <form onSubmit={formik.handleSubmit}>
          {/* ini input email */}
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mt="20px"
          />
          {!!formik.touched.email && !!formik.errors.email ? (
            <Text color="#E86B32">{formik.errors.email}</Text>
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

export default ForgotPasswordPage;
