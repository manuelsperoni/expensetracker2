import { Flex, ChakraProvider } from '@chakra-ui/react';
import Topbar from './components/topbar/topbar';
import Main from './components/main';
import AppTheme from './theme/Theme';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <ChakraProvider theme={AppTheme}>
      <AppProvider>
        <Flex
          direction="column"
          height="100vh"
          width="100vw"
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Topbar />
          <Main />
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
