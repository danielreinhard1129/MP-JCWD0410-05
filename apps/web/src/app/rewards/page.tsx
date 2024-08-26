import RewardsPage from '@/features/rewards';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Rewards = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Customer') {
    return redirect('/register');
  }
  return (
    <div>
      <RewardsPage />
    </div>
  );
};

export default Rewards;
