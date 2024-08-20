import DashboardPage from '@/features/dashboard';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return <DashboardPage />;
};

export default Dashboard;
