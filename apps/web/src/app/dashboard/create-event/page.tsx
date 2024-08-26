import CreateEventPage from '@/features/dashboard/create-event';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const CreateEvent = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <CreateEventPage />
    </div>
  );
};

export default CreateEvent;
