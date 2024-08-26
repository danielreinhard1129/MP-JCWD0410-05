import EventsPage from '@/features/dashboard/events';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Events = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <EventsPage />
    </div>
  );
};

export default Events;
