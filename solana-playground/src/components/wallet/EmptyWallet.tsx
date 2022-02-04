import { Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

export function EmptyWallet() {
  return (
    <>
      <Flex
        bg={'shade'}
        m={5}
        rounded={'lg'}
        p={5}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <VStack gap={2}>
          <Icon as={FiInfo} color={'white'} w={8} h={8} />
          <Text fontSize={'normal'} fontWeight={'normal'} color={'white'}>
            No address available
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
