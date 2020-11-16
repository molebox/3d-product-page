import React, { Suspense } from 'react';
import Model from './model';
import CanvasContainer from './canvas-container';

/**
 * A basketball model
 */
const Basketball = () => {
  return (
    <CanvasContainer
      ml={5}
      height={100}
      width={100}
      position={[0, 20, 20]}
      fov={50}
    >
      <Model
        scenePath="basketball/scene.gltf"
        position={[0, 17, 17]}
        rotation={[0.025, 0.025, 0]}
      />
    </CanvasContainer>
  );
};

export default Basketball;
