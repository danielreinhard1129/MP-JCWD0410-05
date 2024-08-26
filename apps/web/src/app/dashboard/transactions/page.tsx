import TransactionsPage from '@/features/dashboard/transactions';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Transactions = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Admin') {
    return redirect('/dashboard/register');
  }
  return (
    <div>
      <TransactionsPage />
    </div>
  );
};

export default Transactions;
