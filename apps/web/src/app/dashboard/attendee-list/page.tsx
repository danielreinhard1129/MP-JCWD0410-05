import AttendeeListPage from '@/features/dashboard/attendee-list';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const AttendeeList = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <AttendeeListPage />
    </div>
  );
};

export default AttendeeList;
