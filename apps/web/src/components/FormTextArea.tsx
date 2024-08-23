'use client';

import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import { FormikHandlers } from 'formik';
import { FC } from 'react';

interface FormTextAreaProps {
  name: string;
  placeholder: string;
  value: any;
  isError: boolean;
  error: string | undefined;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
}

const FormTextArea: FC<FormTextAreaProps> = ({
  name,
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
      <Textarea
        name={name}
        value={value}
        style={{ resize: 'none' }}
        rows={4}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError ? <Text color="red">{error}</Text> : null}
    </Box>
  );
};

export default FormTextArea;
