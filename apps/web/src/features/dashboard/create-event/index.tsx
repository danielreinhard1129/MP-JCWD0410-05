'use client';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import { addDays } from 'date-fns';
import { useFormik } from 'formik';
import { ChangeEvent, useRef, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CreateEventSchema } from './schemas/CreateEventSchema';
import dynamic from 'next/dynamic';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
  ssr: false,
});

const CreateEventPage = () => {
  const { mutateAsync: createEvent, isPending } = useCreateEvent();

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      start_date: undefined,
      end_date: undefined,
      description: '',
      content: '',
      thumbnail: null,
      price: 0,
      quota: 0,
      discount: 0,
    },

    validationSchema: CreateEventSchema,

    onSubmit: async (values) => {
      await createEvent(values);
    },
  });

  console.log(formik.errors);

  const [selectedImage, setSelectedImage] = useState<string>('');
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const onChangeThumbnail = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length) {
      formik.setFieldValue('thumbnail', files[0]);
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };

  const removeSelectedImage = () => {
    formik.setFieldValue('thumbnail', null);
    setSelectedImage('');
    if (thumbnailRef.current) {
      thumbnailRef.current.value = '';
    }
  };

  const handleDateChange = (ranges: any) => {
    const { selection } = ranges;
    setDateRange([selection]);
    formik.setFieldValue('tanggal', selection);
  };

  return (
    <Container maxW="6xl" mt="70px" gap={5}>
      <form onSubmit={formik.handleSubmit}>
        {selectedImage ? (
          <Box mx="auto" maxW="500px" maxH="300px">
            <Image
              src={selectedImage}
              alt="event thumbnail"
              borderRadius="25px"
            />
            <Button onClick={removeSelectedImage} mt="10px">
              Remove
            </Button>
          </Box>
        ) : null}
        <Box
          mt={7}
          maxW="300px"
          mx="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight="semibold" textAlign="center">
            Thumbnail
          </Text>
          <Input
            ref={thumbnailRef}
            type={'file'}
            accept="image/*"
            onChange={onChangeThumbnail}
            variant="unstyle"
          />
        </Box>
        <Box>
          <Text fontWeight="semibold" mt="20px">
            Nama Event
          </Text>
          <FormInput
            name="name"
            placeholder="Nama Event"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={!!formik.touched.name && !!formik.errors.name}
            error={formik.errors.name}
          />
        </Box>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                Lokasi
              </Text>
              <Flex gap={3} align="center">
                <FormInput
                  name="location"
                  placeholder="Lokasi"
                  type="text"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={
                    !!formik.touched.location && !!formik.errors.location
                  }
                  error={formik.errors.location}
                />
              </Flex>
            </Box>
          </GridItem>

          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                Start Date
              </Text>
              <Flex gap={3} align="center" justify="center" py={3}>
                <DatePicker
                  showTimeSelect
                  selected={formik.values.start_date}
                  onChange={(date) => formik.setFieldValue('start_date', date)}
                  customInput={
                    <Input
                      border="1px"
                      borderColor="#CBD5E0"
                      borderRadius="md"
                      padding="8px"
                    />
                  }
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                End Date
              </Text>
              <Flex gap={3} align="center" justify="center" py={3}>
                <DatePicker
                  showTimeSelect
                  selected={formik.values.end_date}
                  onChange={(date) => formik.setFieldValue('end_date', date)}
                  customInput={
                    <Input
                      border="1px"
                      borderColor="#CBD5E0"
                      borderRadius="md"
                      padding="8px"
                    />
                  }
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                Quota
              </Text>
              <Flex gap={3} align="center">
                <FormInput
                  name="quota"
                  placeholder="Quota"
                  type="number"
                  value={formik.values.quota}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={!!formik.touched.quota && !!formik.errors.quota}
                  error={formik.errors.quota}
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                Harga
              </Text>
              <Flex gap={3} align="center">
                <FormInput
                  name="price"
                  placeholder="Harga"
                  type="number"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={!!formik.touched.price && !!formik.errors.price}
                  error={formik.errors.price}
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold" textAlign="center">
                Diskon
              </Text>
              <Flex gap={3} align="center">
                <FormInput
                  name="discount"
                  placeholder="Diskon"
                  type="number"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={
                    !!formik.touched.discount && !!formik.errors.discount
                  }
                  error={formik.errors.discount}
                />
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Box mt={7} maxW="6xl" mx="auto">
          <Text fontWeight="semibold">Deskripsi</Text>
          <FormTextArea
            name="description"
            placeholder="Deskripsi"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={
              !!formik.touched.description && !!formik.errors.description
            }
            error={formik.errors.description}
          />
        </Box>
        {/* <Box maxW="6xl" mx="auto">
          <Text fontWeight="semibold">Syarat & Ketentuan</Text>
          <RichTextEditor
            onChange={(html: string) => formik.setFieldValue('content', html)}
            isError={Boolean(formik.errors.content)}
            value={formik.values.content}
          />
        </Box> */}
        <Box pb={5} textAlign="end">
          <Button type="submit" colorScheme="teal" disabled={isPending}>
            {isPending ? 'Loading...' : 'Submit'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateEventPage;
