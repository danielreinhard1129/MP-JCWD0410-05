'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';

const ProfilePage = () => {
  const [iconColor, setIconColor] = useState('#B8BACF');

  return (
    <Box>
      <Container maxW="6xl" mt="70px">
        <Grid templateColumns="1fr 3fr">
          <GridItem mx="auto">
            <Box
              width="150px"
              height="150px"
              border="1px solid #B8BACF"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ border: '1px solid #E86B32' }}
              onMouseEnter={() => setIconColor('#E86B32')}
              onMouseLeave={() => setIconColor('#B8BACF')}
            >
              <MdOutlineFileUpload size="25px" color={iconColor} />
              <Text color={iconColor}>Logo</Text>
            </Box>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>
                Nama Organizer
                <Text as="span" color="red.500" ml="1"></Text>
              </FormLabel>
              <Input placeholder="Nama Organizer" />
              <FormLabel mt={7}>
                Email
                <Text as="span" color="red.500" ml="1"></Text>
              </FormLabel>
              <Input placeholder="Email" />
              <FormLabel mt={7}>
                Nomor Ponsel
                <Text as="span" color="red.500" ml="1"></Text>
              </FormLabel>
              <Input placeholder="Nomor Ponsel" />
              <FormLabel mt={7}>
                Alamat
                <Text as="span" color="red.500" ml="1"></Text>
              </FormLabel>
              <Input placeholder="Alamat" />
            </FormControl>
            <Box boxShadow="base" mt={7} p={3} maxW="200px" bgColor="#D4CDF4">
              <Flex align="center" justify="center" gap={3}>
                <Text fontWeight="semibold">Referral:</Text>
                <Text>HDK29K</Text>
              </Flex>
            </Box>
            <Flex justify="end">
              <Button _hover={{ bgColor: '#003249', color: 'whitesmoke' }}>
                Simpan Perubahan
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
