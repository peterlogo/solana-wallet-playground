import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import {
  createAddress,
  getAddresses,
  refreshBalance
} from '../../services/axios';
import { BalanceIndicator } from './BalanceIndicator';
import { ConnectionIndicator } from './ConnectionIndicator';
import { EmptyWallet } from './EmptyWallet';
import { WalletItem } from './WalletItem';

interface WalletData {
  address: string;
  balance: string;
}

export function WalletContent() {
  const [data, setData] = useState<WalletData[] | []>([]);
  const [total, setTotal] = useState<number>(0);

  const setTotalBalance = useCallback((): void => {
    let balance = 0;
    data.forEach((wallet) => {
      balance = parseFloat(wallet.balance) + balance;
    });
    setTotal(balance);
  }, [data]);

  const handleCreateAddress = async (): Promise<void> => {
    try {
      await createAddress().then((res) => {
        const newAddress = res;
        const newData = [...data, newAddress];
        setData(newData);
        setTotalBalance();
      });
    } catch (error) {
      throw error;
    }
  };

  const handleRefreshBalance = async (address: string): Promise<void> => {
    try {
      const account = await refreshBalance(address);
      if (isEmpty(account)) return;
      const response = await getAddresses();
      setData(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAddresses().then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    setTotalBalance();
  }, [setTotalBalance]);

  return (
    <>
      <Container maxW={'container.lg'} mt={5}>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
          <GridItem>
            <ConnectionIndicator />
          </GridItem>
          <GridItem>
            <HStack gap={5} justifyContent={'flex-end'}>
              <BalanceIndicator amount={total.toString()} />
              <Button
                color={'white'}
                variant={'outline'}
                fontSize={'medium'}
                fontWeight={'medium'}
                _hover={{
                  background: 'blue.500',
                  borderColor: 'blue.500'
                }}
                onClick={() => handleCreateAddress()}
              >
                Create Address
              </Button>
            </HStack>
          </GridItem>
        </Grid>
        <Box bg={'primary'} mt={8} p={3} rounded={'lg'}>
          {data.length === 0 ? (
            <EmptyWallet />
          ) : (
            data.map((wallet, index) => (
              <WalletItem
                key={index}
                address={wallet.address}
                balance={wallet.balance}
                onClickRefresh={() => handleRefreshBalance(wallet.address)}
              />
            ))
          )}
        </Box>
      </Container>
    </>
  );
}
