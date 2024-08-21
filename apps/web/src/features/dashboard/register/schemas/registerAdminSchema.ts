import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const RegisterAdminSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .minSymbols(1)
    .min(6),
  phone: Yup.number().required('Phone number is required').min(10),
  referral: Yup.string().min(5).max(5),
});
