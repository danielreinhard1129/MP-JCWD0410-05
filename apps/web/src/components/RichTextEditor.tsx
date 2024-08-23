'use client';

import { Box, Container, Text } from '@chakra-ui/react';
import { FC } from 'react';
import QuillEditor from 'react-quill';

interface RichTextEditorProps {
  value: string;
  isError: boolean;
  onChange: (value: string) => void;
}

const RichTextEditor: FC<RichTextEditorProps> = ({
  value,
  isError,
  onChange,
}) => {
  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ['bold', 'italic']],
  };
  return (
    <Box>
      <Container maxW={{ base: '100%', md: '6xl' }}>
        <Box py={3}>
          <QuillEditor
            modules={quillModules}
            value={value}
            onChange={onChange}
          />
          {isError && (
            <Text color="red" mt={3}>
              {value} is Required
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default RichTextEditor;
