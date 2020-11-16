import React from 'react';
import Model from './model';
import { OrbitControls } from '@react-three/drei';
import CanvasContainer from './canvas-container';

/**
 * A trainers modal
 */
const Product = () => {
  return (
    <CanvasContainer height={800} width={800} position={[20, 30, 20]} fov={75}>
      <Model
        scenePath="shoes/scene.gltf"
        position={[0, 10, 0]}
        rotation={[0, 0.005, 0]}
      />
      <OrbitControls />
    </CanvasContainer>
  );
};

export default Product;
