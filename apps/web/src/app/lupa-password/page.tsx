import ForgotPasswordPage from '@/features/lupa-password';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const ForgotPassword = async () => {
  const session = await auth();

  if (!session?.user.roles) {
    return redirect('/register');
  }
  return <ForgotPasswordPage />;
};

export default ForgotPassword;
