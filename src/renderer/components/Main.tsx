import { Flex, Box, Collapse, useDisclosure, Button } from '@chakra-ui/react';
import AnalyticsView from 'renderer/mainView/AnalyticsView';
import TransactionsView from 'renderer/mainView/TransactionsView';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppContext } from 'renderer/context/AppContext';

export default function Main() {
  const state = useAppContext();

  return (
    <Flex direction={{ base: 'column', lg: 'row' }} grow={1} bg="brand.600">
      <Flex
        overflowY="scroll"
        bg="brand.600"
        grow="1"
        direction="column"
        paddingInline="5"
        gap="5"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <TransactionsView />
      </Flex>
      <Flex
        overflowY="scroll"
        bg="brand.600"
        grow="1"
        direction="column"
        paddingInline="5"
        gap="5"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <TransactionsView />
      </Flex>
    </Flex>
  );
}
