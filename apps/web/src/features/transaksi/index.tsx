// import {
//   Box,
//   Button,
//   Container,
//   Divider,
//   Flex,
//   Grid,
//   GridItem,
//   Select,
//   Text,
// } from '@chakra-ui/react';
// import Link from 'next/link';
// import { CiBank } from 'react-icons/ci';

// const TransactionPage = () => {
//   return (
//     <Box py="40px" bgColor="#F3F3F3">
//       <Container maxW={{ base: '100%', md: '7xl' }} bgColor="white" p={7}>
//         <Grid templateColumns={{ base: 'none', md: '4fr 2fr 2fr 2fr' }}>
//           <GridItem>
//             <Text fontWeight="bold" fontSize="sm">
//               Tiket Dipesan
//             </Text>
//             <Text py={7} fontSize="xl">
//               Little Orchard Cider and Music Festival 2024 - VVIP
//             </Text>
//           </GridItem>
//           <GridItem textAlign="center">
//             <Text color="#718096" fontSize="sm">
//               Harga Satuan
//             </Text>
//             <Text py={7} fontWeight="semibold">
//               2.000.000
//             </Text>
//           </GridItem>
//           <GridItem textAlign="center">
//             <Text color="#718096" fontSize="sm">
//               Jumlah
//             </Text>
//             <Text py={7} fontWeight="semibold">
//               2
//             </Text>
//           </GridItem>
//           <GridItem textAlign="center">
//             <Text color="#718096" fontSize="sm">
//               Subtotal Tiket
//             </Text>
//             <Text py={7} fontWeight="semibold">
//               4.000.000
//             </Text>
//           </GridItem>
//         </Grid>
//         <Divider borderWidth="1px" borderColor="#EDF2F7" />

//         {/* voucher rewards */}
//         {/* <Grid
//           gap={{ base: '22' }}
//           templateColumns={{ base: '1fr', md: '1fr 1fr' }}
//           py="50px"
//         >
//           <GridItem m="auto">
//             <Flex
//               gap={10}
//               p={5}
//               w={{ base: '350px', md: '400px' }}
//               align="center"
//               justify="center"
//               borderRadius="5px"
//               bgColor="#D4CDF4"
//             >
//               <Text fontWeight="bold" fontSize="sm">
//                 Voucher Toko
//               </Text>
//               <Text fontSize="3xl" fontWeight="bold">
//                 30%
//               </Text>
//               <Button
//                 border="1px"
//                 _hover={{
//                   borderColor: '#E86B32',
//                   bgColor: '#E86B32',
//                   color: 'white',
//                 }}
//                 h="30px"
//               >
//                 Pakai
//               </Button>
//             </Flex>
//           </GridItem>
//           <GridItem m="auto">
//             <Flex
//               gap={10}
//               p={5}
//               w={{ base: '350px', md: '400px' }}
//               align="center"
//               justify="center"
//               borderRadius="5px"
//               bgColor="#D4CDF4"
//             >
//               <Text fontWeight="bold" fontSize="sm">
//                 Voucher Rewards
//               </Text>
//               <Text fontSize="3xl" fontWeight="bold">
//                 30%
//               </Text>
//               <Button
//                 border="1px"
//                 _hover={{
//                   borderColor: '#E86B32',
//                   bgColor: '#E86B32',
//                   color: 'white',
//                 }}
//                 h="30px"
//               >
//                 Pakai
//               </Button>
//             </Flex>
//           </GridItem>
//         </Grid>
//         <Divider borderWidth="1px" borderColor="#EDF2F7" /> */}

//         {/* total pesanan */}
//         <Grid
//           templateColumns={{ base: '1fr 1fr', md: '5fr 1fr' }}
//           py="30px"
//           alignItems="center"
//         >
//           <Text textAlign="end" pr={5} color="#718096" fontSize="sm">
//             Total pesanan :
//           </Text>
//           <Text align="center" fontWeight="bold" color="#E86B32" fontSize="xl">
//             Rp 4.000.000
//           </Text>
//         </Grid>
//         <Divider borderWidth="1px" borderColor="#EDF2F7" />

//         {/* metode pambayaran dan bayar */}
//         <Grid templateColumns={{ base: '1fr', md: '5fr 1fr' }}>
//           <Flex my={5} align="center" gap={{ base: '3', md: '5' }}>
//             {/* qris */}
//             {/* <Link href="/transaksi">
//               <Text
//                 border="1px"
//                 borderColor="#e3e7ea"
//                 borderRadius="10px"
//                 py="2"
//                 px="3"
//               >
//                 QRIS
//               </Text>
//             </Link> */}
//           </Flex>
//           {/* bayar */}
//           <Flex my={{ base: '3', md: '5' }} justifyContent="center">
//             <Link href="/transaksi">
//               <Button
//                 fontSize="md"
//                 fontWeight="bold"
//                 bgColor="#E86B32"
//                 color="white"
//                 py={2}
//                 px={5}
//                 borderRadius="10px"
//                 _hover={{
//                   borderColor: '#E3E7EA',
//                   bgColor: '#E3E7EA',
//                   color: 'black',
//                 }}
//               >
//                 Upload Proof of Payment
//               </Button>
//             </Link>
//           </Flex>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default TransactionPage;
