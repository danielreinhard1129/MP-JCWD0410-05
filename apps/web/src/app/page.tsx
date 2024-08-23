// import EventList from '@/components/EventList';
import Jumbotron from '@/components/Jumbotron';
import EventList from '@/features/home/components/EventList';
import { auth } from '@/lib/auth';
import { Box } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (session?.user.roles !== 'Customer') {
    return redirect('/register');
  }
  return (
    <Box>
      <Jumbotron />
      <EventList />
    </Box>
  );
}
