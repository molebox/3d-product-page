import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';

/**
 * A container with a set width to hold the canvas.
 */
const CanvasContainer = ({
  width,
  height,
  position,
  fov,
  children,
  ...rest
}) => {
  return (
    <Box {...rest} h={height} w={width} zIndex="999">
      <Canvas
        colorManagement
        camera={{
          position,
          fov,
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </Box>
  );
};

export default CanvasContainer;
