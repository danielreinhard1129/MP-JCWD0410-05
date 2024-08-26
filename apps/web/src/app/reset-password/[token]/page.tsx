import ResetPasswordPage from '@/features/reset-password';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import async from 'react-select/dist/declarations/src/async/index';

const ResetPassword = async ({ params }: { params: { token: string } }) => {
  const session = await auth();

  if (!session?.user.roles) {
    return redirect('/register');
  }
  return <ResetPasswordPage token={params.token} />;
};

export default ResetPassword;
