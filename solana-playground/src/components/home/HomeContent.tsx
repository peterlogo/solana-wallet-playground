import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { HomeOption } from './HomeOption';
import { FiBox, FiCreditCard } from 'react-icons/fi';

export function HomeContent() {
  return (
    <>
      <Box mt={'8%'}>
        <VStack spacing={16}>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <HomeOption icon={FiCreditCard} path="/wallet" />
            <HomeOption icon={FiBox} path="/portal" />
          </Flex>
          <Box bg={'secondary'} rounded={'full'}>
            <Text p={4} color={'primary'}>
              Choose Demo Environment
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
