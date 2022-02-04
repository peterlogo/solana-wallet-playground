import { Flex, HStack, Text } from '@chakra-ui/react';

interface BalanceProps {
  amount: string;
}

export function BalanceIndicator(props: BalanceProps) {
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
            {props.amount} SOL
          </Text>
        </HStack>
      </Flex>
    </>
  );
}
