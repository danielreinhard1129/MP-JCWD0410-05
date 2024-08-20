import EventList from '@/components/EventList';
import Jumbotron from '@/components/Jumbotron';
import { auth } from '@/lib/auth';
import { Box } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (session?.user.roles === 'Admin') {
    return redirect('/register');
  }
  return (
    <Box>
      <Jumbotron />
      <EventList />
    </Box>
  );
}
