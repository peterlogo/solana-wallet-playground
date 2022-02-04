import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export function AppLayout(): JSX.Element {
  return (
    <>
      <Box bgGradient="linear(to-r, #0F0C29, #302B63)" height={'100vh'}>
        <AppHeader />
        <Outlet />
      </Box>
    </>
  );
}
