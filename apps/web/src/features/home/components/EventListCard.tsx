import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import Link from 'next/link';
import { title } from 'process';
import { FC } from 'react';

interface EventCardProps {
  thumbnail: string;
  name: string;
  location: string;
  start_date: string;
  end_date: string;
}

const EventListCard: FC<EventCardProps> = ({
  thumbnail,
  name,
  location,
  start_date,
  end_date,
}) => {
  return (
    <Box maxW={{ base: '350px', md: 'sm' }}>
      <Image
        src={thumbnail}
        alt="thumbnail"
        borderRadius="25px"
        objectFit="cover"
        width="sm"
        height="250px"
      />
      <Stack mt="3" spacing="3">
        <Box>
          <Heading size="md" isTruncated>
            {name}
          </Heading>
          <Text align="justify" isTruncated>
            {location}
          </Text>
          <Text>{`${format(new Date(start_date), 'dd MMMMMMMMMMMM yyyy')} - ${format(new Date(end_date), 'dd MMMMMMMMMMMM yyyy')}`}</Text>
        </Box>
      </Stack>
      <Text fontWeight="semibold" mt={3} _hover={{ color: '#E86B32' }}>
        See the event...
      </Text>
    </Box>
  );
};

export default EventListCard;
