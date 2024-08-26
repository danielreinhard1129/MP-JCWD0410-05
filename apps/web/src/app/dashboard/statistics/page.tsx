import StatisticsPage from '@/features/dashboard/statistics';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Statistics = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <StatisticsPage />
    </div>
  );
};

export default Statistics;
