import TransactionDetailsPage from '@/features/transaksi/[id]';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import async from 'react-select/dist/declarations/src/async/index';

const Transaction = async () => {
  const session = await auth();

  if (session?.user.roles !== 'Customer') {
    return redirect('/register');
  }
  return (
    <div>
      <TransactionDetailsPage />
    </div>
  );
};

export default Transaction;
