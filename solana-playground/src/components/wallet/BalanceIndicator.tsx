import { Flex, HStack, Text } from '@chakra-ui/react';

export function BalanceIndicator() {
  return (
    <>
      <Flex bg={'primary'} rounded={'lg'} h={12}>
        <HStack p={2}>
          <Text
            px={2}
            fontSize={'medium'}
            fontWeight={'medium'}
            color={'white'}
          >
            Balance:
          </Text>
          <Text
            px={2}
            fontSize={'medium'}
            fontWeight={'medium'}
            color={'white'}
          >
            30 SOL
          </Text>
        </HStack>
      </Flex>
    </>
  );
}
