import ProfileAdminPage from '@/features/dashboard/profile';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const ProfileAdmin = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <ProfileAdminPage />
    </div>
  );
};

export default ProfileAdmin;
