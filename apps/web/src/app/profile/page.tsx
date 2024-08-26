import ProfilePage from '@/features/profile';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import async from 'react-select/dist/declarations/src/async/index';

const ProfileUser = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Customer') {
    return redirect('/register');
  }
  return <ProfilePage />;
};

export default ProfileUser;
