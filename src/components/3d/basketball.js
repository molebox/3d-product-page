import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';
import BasketballModal from './basketball-modal';

/**
 * A container with a set width to hold the canvas
 */
const Basketball = () => {
  return (
    <Box ml={5} h={100} w={100} zIndex="999">
      <Canvas
        colorManagement
        camera={{
          position: [0, 20, 20],
          fov: 50,
        }}
      >
        <Suspense fallback={null}>
          <BasketballModal
            scenePath="basketball/scene.gltf"
            position={[0, 17, 17]}
          />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Basketball;
