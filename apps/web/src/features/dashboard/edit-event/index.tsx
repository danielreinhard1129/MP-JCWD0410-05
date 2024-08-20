import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdEdit, MdOutlineEventNote } from 'react-icons/md';

const EditEventPage = () => {
  return (
    <Container maxW="6xl" mt="70px">
      <Image
        src="https://assets.loket.com/neo/production/images/banner/20240811134619_66b85e3b5c5ef.jpg"
        borderRadius="25px"
        mx="auto"
        maxW="700px"
      />
      <Heading textAlign="center" py={7}>
        Nama Event
      </Heading>
      <Flex justify="space-between">
        <Box>
          <Text fontWeight="semibold">Diselenggarakan Oleh:</Text>
          <Text mt={3}>Nama Penyelenggara</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold">Tanggal & Waktu</Text>
          <Flex gap={3} mt={3}>
            <MdOutlineEventNote size="25px" color="#023248" />
            <Text>Tanggal</Text>
            <MdEdit size="17px" color="#023248" />
          </Flex>
          <Flex gap={3}>
            <IoTimeOutline size="25px" color="#023248" />
            <Text>Waktu</Text>
            <MdEdit size="17px" color="#023248" />
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="semibold">Lokasi</Text>
          <Flex gap={3} mt={3}>
            <IoLocationOutline size="25px" color="#EB493B" />
            <Text>Nama Lokasi</Text>
          </Flex>
        </Box>
      </Flex>
      <Box mt={7} maxW="700px" mx="auto">
        <Text fontWeight="semibold">Deskripsi</Text>
        <Textarea
          placeholder="Silahkan tulis deskripsi event anda disini"
          mt={3}
        ></Textarea>
      </Box>
    </Container>
  );
};

export default EditEventPage;
