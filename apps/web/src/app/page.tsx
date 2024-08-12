import EventList from '@/components/EventList';
import Jumbotron from '@/components/Jumbotron';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Jumbotron />
      <EventList />
    </Box>
  );
}
