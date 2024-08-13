import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const Events = () => {
  return (
    <Box>
      <Container maxW="6xl" mt="70px">
        <Grid templateColumns="1fr 1fr" gap="35px">
          <GridItem>
            <Heading>Event Aktif</Heading>
            <Box
              boxShadow="base"
              mt={7}
              gap={5}
              border="1px solid #B8BACF"
              borderRadius="25px"
            >
              <Image
                src="https://assets.loket.com/neo/production/images/banner/20240715202722_669523ba5fa58.jpg"
                borderRadius="25px"
                p={3}
              ></Image>
              <Box p={3}>
                <Text fontWeight="semibold" textAlign="center" fontSize="19px">
                  SURREALIST MUSIC FESTIVAL! #BreakOutDayFest
                </Text>
                <Flex gap={3} justify="center" mt={3}>
                  <Flex align="center" gap={1}>
                    <Flex justify="start" align="center" boxSize={7}>
                      <MdOutlineEventNote size="25px" color="#023248" />
                    </Flex>
                    <Text fontWeight="semibold" maxW="200px">
                      21 September 2024
                    </Text>
                  </Flex>

                  <Flex align="center" gap={1} mt={1}>
                    <Flex justify="start" align="center" boxSize={7}>
                      <IoLocationOutline size="25px" color="#EB493B" />
                    </Flex>
                    <Text fontWeight="semibold" maxW="200px" noOfLines={1}>
                      Grha Sabha Pramana UGM Yogyakarta
                    </Text>
                  </Flex>
                </Flex>
                <Flex justify="center" mt={7} gap={9}>
                  <Flex gap={1}>
                    <Text fontWeight="semibold">Kuota</Text>
                    <Text fontWeight="medium">100</Text>
                  </Flex>
                  <Flex gap={1}>
                    <Text fontWeight="semibold" color="#808080">
                      Terjual
                    </Text>
                    <Text fontWeight="medium" color="#808080">
                      20
                    </Text>
                  </Flex>
                  <Flex gap={1}>
                    <Text fontWeight="semibold" color="#EB493B">
                      Sisa
                    </Text>
                    <Text fontWeight="medium" color="#EB493B">
                      80
                    </Text>
                  </Flex>
                  <Flex align="center" gap={1} _hover={{color: "#E86B32"}}>
                    <Link href="/dashboard/edit-event">
                      <FaEdit/>
                    </Link>
                    <Link href="/dashboard/edit-event">
                      <Text> Edit Event</Text>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Heading>Event Lalu</Heading>
            <Box
              boxShadow="base"
              mt={7}
              gap={5}
              border="1px solid #B8BACF"
              borderRadius="25px"
            >
              <Image
                src="https://assets.loket.com/neo/production/images/banner/20240729065241.png"
                borderRadius="25px"
                p={3}
              ></Image>
              <Box p={3}>
                <Text fontWeight="semibold" textAlign="center" fontSize="19px">
                  ARMANI WHITE in MEDAN
                </Text>
                <Flex gap={3} justify="center" mt={3}>
                  <Flex align="center" gap={1}>
                    <Flex justify="start" align="center" boxSize={7}>
                      <MdOutlineEventNote size="25px" color="#023248" />
                    </Flex>
                    <Text fontWeight="semibold" maxW="200px">
                      19 Januari 2024
                    </Text>
                  </Flex>

                  <Flex align="center" gap={1} mt={1}>
                    <Flex justify="start" align="center" boxSize={7}>
                      <IoLocationOutline size="25px" color="#EB493B" />
                    </Flex>
                    <Text fontWeight="semibold" maxW="200px" noOfLines={1}>
                      Lapangan Merdeka Medan
                    </Text>
                  </Flex>
                </Flex>
                <Flex justify="center" mt={7} gap={9}>
                  <Flex gap={1}>
                    <Text fontWeight="semibold">Kuota</Text>
                    <Text fontWeight="medium">100</Text>
                  </Flex>
                  <Flex gap={1}>
                    <Text fontWeight="semibold" color="#808080">
                      Terjual
                    </Text>
                    <Text fontWeight="medium" color="#808080">
                      20
                    </Text>
                  </Flex>
                  <Flex gap={1}>
                    <Text fontWeight="semibold" color="#EB493B">
                      Sisa
                    </Text>
                    <Text fontWeight="medium" color="#EB493B">
                      80
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
