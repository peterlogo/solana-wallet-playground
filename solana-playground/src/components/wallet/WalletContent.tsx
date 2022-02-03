import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Text
} from '@chakra-ui/react';
import { BalanceIndicator } from './BalanceIndicator';
import { ConnectionIndicator } from './ConnectionIndicator';

export function WalletContent() {
  return (
    <>
      <Container maxW={'container.lg'} mt={5}>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
          <GridItem>
            <ConnectionIndicator />
          </GridItem>
          <GridItem>
            <HStack gap={5} justifyContent={'flex-end'}>
              <BalanceIndicator />
              <Button
                color={'white'}
                variant={'outline'}
                fontSize={'medium'}
                fontWeight={'medium'}
                _hover={{
                  background: 'blue.500'
                }}
              >
                Create Address
              </Button>
            </HStack>
          </GridItem>
        </Grid>
        <Box bg={'primary'} mt={8}>
          <Text
            px={2}
            fontSize={'medium'}
            fontWeight={'medium'}
            color={'white'}
          >
            30 SOL
          </Text>
        </Box>
      </Container>
    </>
  );
}
