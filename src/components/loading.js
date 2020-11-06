import React from 'react';
import { Progress } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';

const Loading = () => (
  <Box>
    <Progress size="xs" isIndeterminate />
  </Box>
);

export default Loading;
