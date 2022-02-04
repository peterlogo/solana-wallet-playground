import { Container, Image, Spacer, Stack, Text, Box } from '@chakra-ui/react';
import LogoWhite from '../../assets/Logo-Primary.svg';

export function AppHeader(): JSX.Element {
  return (
    <>
      <Container maxWidth={'container.xl'}>
        <Box py={10}>
          <Stack direction={'row'}>
            <Image src={LogoWhite} alt="krownpay-logo-white" />
            <Spacer />
            <Text fontSize={'medium'} fontWeight={'medium'} color={'white'}>
              Krownpay Solana v1
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
