import NotificationPage from '@/features/dashboard/notification/page';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Notification = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <NotificationPage />
    </div>
  );
};

export default Notification;
