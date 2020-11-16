import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import ModelLights from './model-lights';

// The shoes modal => https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
// The basketball  modal => https://sketchfab.com/3d-models/basket-bullet-10-lb-d18692ce01d74c368ab953812e3b80d0

// Add this text somewhere => This work is based on "Air Jordan 1" (https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725) by makoto (https://sketchfab.com/lu87813) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

const Model = ({ scenePath, position, rotation }) => {
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();
  useFrame(
    () => (
      (mesh.current.rotation.x += rotation[0]),
      (mesh.current.rotation.y += rotation[1])
    ),
  );
  return (
    <mesh ref={mesh} position={position}>
      <ModelLights/>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
