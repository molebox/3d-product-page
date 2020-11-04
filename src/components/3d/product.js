import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';
import Modal from './modal';

/**
 * A container with a set width to hold the canvas
 */
const Product = () => {
  return (
    <Box h={[300, 800]} w={[300, 800]} zIndex="999">
      <Canvas
        colorManagement
        camera={{
          position: [20, 30, 20],
          fov: 75,
        }}
      >
        <Suspense fallback={null}>
          <Modal />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Product;
