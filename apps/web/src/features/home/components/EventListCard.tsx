import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { title } from 'process';
import { FC } from 'react';

interface EventCardProps {
  thumbnail: string;
  name: string;
  location: string;
  date: string;
}

const EventListCard: FC<EventCardProps> = ({
  thumbnail,
  name,
  location,
  date,
}) => {
  return (
    <Box maxW={{ base: '350px', md: 'sm' }}>
      <Link href="/explore/id">
        <Image src={thumbnail} alt="thumbnail" borderRadius="25px" />
      </Link>
      <Stack mt="3" spacing="3">
        <Box>
          <Heading size="md" isTruncated>
            {name}
          </Heading>
          <Text align="justify" isTruncated>
            {location}
          </Text>
          <Text>{date}</Text>
        </Box>
      </Stack>
      <Link href="/explore/id">
        <Text fontWeight="semibold" mt={3} _hover={{ color: '#E86B32' }}>
          See the event...
        </Text>
      </Link>
    </Box>
  );
};

export default EventListCard;
