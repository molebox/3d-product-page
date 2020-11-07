import React from 'react';
import { CircularProgress, Box } from '@chakra-ui/core';
import { Html } from '@react-three/drei';

/**
 * Html - Allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically.
 * We need this so that we can insert the loader onto the canvas while the modal loads.
 */
const Loading = () => (
  <Html>
    <Box w="100%" h="100%">
      <CircularProgress isIndeterminate color="red" />
    </Box>
  </Html>
);

export default Loading;
