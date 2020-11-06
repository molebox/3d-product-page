import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import ModalLights from './modal-lights';

// The modal => https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725

// Add this text somewhere => This work is based on "Air Jordan 1" (https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725) by makoto (https://sketchfab.com/lu87813) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

const ProductModal = ({ scenePath, position }) => {
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh} position={position} rotateX={Math.PI / 2}>
      <ModalLights />
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default ProductModal;
