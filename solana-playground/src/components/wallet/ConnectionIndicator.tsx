import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

export function ConnectionIndicator() {
  return (
    <>
      <Flex bg={'primary'} rounded={'lg'} w={'250px'}>
        <HStack>
          <Icon as={BsDot} color={'green.500'} w={12} h={12} />
          <Text fontSize={'medium'} fontWeight={'medium'} color={'white'}>
            Connected to DevNet
          </Text>
        </HStack>
      </Flex>
    </>
  );
}
