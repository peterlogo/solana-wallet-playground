import { Flex, IconButton, Spacer, Stack, Text } from '@chakra-ui/react';
import { FiRefreshCw } from 'react-icons/fi';

interface WalletData {
  address: string;
  balance: string;
  onClickRefresh: () => void;
}

export function WalletItem({
  address,
  balance,
  onClickRefresh
}: WalletData): JSX.Element {
  return (
    <>
      <Flex bg={'shade'} m={5} rounded={'lg'} p={5}>
        <Stack direction={'column'}>
          <Text fontSize={'medium'} fontWeight={'medium'} color={'white'}>
            Address:
          </Text>
          <Text fontSize={'medium'} fontWeight={'medium'} color={'white'}>
            {address}
          </Text>
        </Stack>
        <Spacer />
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Text
            mx={2}
            fontSize={'medium'}
            fontWeight={'medium'}
            color={'white'}
          >
            {balance} SOL
          </Text>
          <IconButton
            variant="outline"
            color="white"
            aria-label="refresh-balance"
            icon={<FiRefreshCw />}
            _hover={{
              background: 'blue.500',
              borderColor: 'blue.500'
            }}
            onClick={onClickRefresh}
          />
        </Flex>
      </Flex>
    </>
  );
}
