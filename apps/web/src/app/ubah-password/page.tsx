import ChangePasswordPage from '@/features/ubah-password';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session?.user.roles) {
    return redirect('/register');
  }
  return <ChangePasswordPage />;
};

export default page;
