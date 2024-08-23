import * as Yup from 'yup';

export const CreateEventSchema = Yup.object().shape({
  thumbnail: Yup.mixed().nullable().required('thumbnail event is required'),
  name: Yup.string().required('Name event is required'),
  location: Yup.string().required('location is required'),
  price: Yup.number().required('price is required'),
  start_date: Yup.string().required('start date is required'),
  end_date: Yup.string().required('end date is required'),
  content: Yup.string().required('content is required'),
  description: Yup.string().required('deskripsi is required'),
  quota: Yup.number().required('quota is required'),
});
