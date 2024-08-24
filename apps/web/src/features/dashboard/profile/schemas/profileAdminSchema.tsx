import * as Yup from 'yup';

export const ProfileAdminSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.number().required('Phone number is required').min(10),
});
