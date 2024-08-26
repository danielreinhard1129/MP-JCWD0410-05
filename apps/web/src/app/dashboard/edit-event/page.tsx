import EditEventPage from '@/features/dashboard/edit-event';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const EditEvent = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <EditEventPage />
    </div>
  );
};

export default EditEvent;
