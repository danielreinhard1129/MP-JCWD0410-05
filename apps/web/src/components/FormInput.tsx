'use client';

import { Box, Input, Text } from '@chakra-ui/react';
import { FormikHandlers } from 'formik';
import { FC } from 'react';

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: any;
  isError: boolean;
  error: string | undefined;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
}

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  error,
  isError,
  onBlur,
  onChange,
  value,
}) => {
  return (
    <Box
      py={3}
      maxW={{ base: '100%', md: '6xl' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      mx="auto"
    >
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError ? <Text color="red">{error}</Text> : null}
    </Box>
  );
};

export default FormInput;
