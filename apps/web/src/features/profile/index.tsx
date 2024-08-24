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
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useRef, useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { ProfileSchema } from './schemas/profileSchema';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import useProfile from '@/hooks/profile/useProfile';
import Link from 'next/link';

const ProfilePage = () => {
  const session = useSession();
  if (session?.data?.user.roles !== 'Customer') {
    return redirect('/login');
  }
  const [iconColor, setIconColor] = useState('#B8BACF');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const photoRef = useRef<HTMLInputElement>(null);
  const onChangeProfile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      formik.setFieldValue('profile_picture', files[0]);
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };
  const removeSelectedImage = () => {
    formik.setFieldValue('profilePicture', null);
    setSelectedImage('');
    if (photoRef.current) {
      photoRef.current.value = '';
    }
  };
  const { mutateAsync: profile, isPending } = useProfile(
    Number(session.data?.user.id),
  );
  const formik = useFormik({
    initialValues: {
      profile_picture: null,
      name: session.data?.user.name || '',
      email: session.data?.user.email || '',
      phone: session.data?.user.phone || '',
      address: session.data?.user.address || '',
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      await profile(values);
    },
    enableReinitialize: true,
  });

  return (
    <Box>
      <Container maxW="6xl" my="70px">
        <Grid templateColumns="1fr 3fr">
          <GridItem mx="auto">
            <Box
              width="150px"
              height="150px"
              border="1px solid #B8BACF"
              borderRadius="50%"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ border: '1px solid #E86B32' }}
              position="relative"
              onMouseEnter={() => setIconColor('#E86B32')}
              onMouseLeave={() => setIconColor('#B8BACF')}
            >
              {selectedImage ? (
                <>
                  <Image src={selectedImage} alt="Profile Picture" fill />
                </>
              ) : null}
              <Input
                type="file"
                variant="unstyled" // Removes the default styling
                position="absolute"
                opacity="0" // Makes the input invisible
                zIndex="1"
                accept="image/*"
                onChange={onChangeProfile}
                ref={photoRef}
              />
              <MdOutlineFileUpload size="25px" color={iconColor} />
              <Text color={iconColor}>Profile Picture</Text>
            </Box>

            {selectedImage && (
              <Flex align="center" justify="center" mt={7}>
                <Button onClick={removeSelectedImage}>Remove Photo</Button>
              </Flex>
            )}
          </GridItem>
          <GridItem>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isRequired>
                <FormLabel>
                  Nama Lengkap
                  <Text as="span" color="red.500" ml="1"></Text>
                </FormLabel>
                <Input
                  placeholder="Nama Lengkap"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />

                <FormLabel mt={7}>
                  Email
                  <Text as="span" color="red.500" ml="1"></Text>
                </FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <FormLabel mt={7}>
                  Nomor Ponsel
                  <Text as="span" color="red.500" ml="1"></Text>
                </FormLabel>
                <Input
                  placeholder="Nomor Ponsel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <FormLabel mt={7}>
                  Alamat
                  <Text as="span" color="red.500" ml="1"></Text>
                </FormLabel>
                <Input
                  placeholder="Alamat"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Box boxShadow="base" mt={7} p={3} maxW="200px" bgColor="#D4CDF4">
                <Flex align="center" justify="center" gap={3}>
                  <Text fontWeight="semibold">Kode Referal:</Text>
                  <Text>{session.data?.user.referral}</Text>
                </Flex>
              </Box>
              <Flex justify="space-between" align="center" mt={5}>
                <Link href="/ubah-password">
                  <Text color="#006BB4">Ubah Password?</Text>
                </Link>
                <Button
                  _hover={{ bgColor: '#003249', color: 'whitesmoke' }}
                  disabled={isPending}
                  type="submit"
                  color="#003249"
                >
                  {isPending ? 'Loading...' : 'Simpan Perubahan'}
                </Button>
              </Flex>
            </form>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
