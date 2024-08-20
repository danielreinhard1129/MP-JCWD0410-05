import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';

const RewardsPage = () => {
  return (
    <Box>
      <Container maxW="7xl" py="270px">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" color="#003249">
            Reward
          </Text>
          <Flex gap={3} justifyContent="center" alignItems="center" mt={4}>
            <Text
              border="1px solid black"
              h="40px"
              w="200px"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Nama Reward
            </Text>
            <Button _hover={{ bgColor: '#E86B32', color: 'white' }}>
              Klaim
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default RewardsPage;
