import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

// The modal => https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725

// Add this text somewhere => This work is based on "Air Jordan 1" (https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725) by makoto (https://sketchfab.com/lu87813) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

const Modal = ({ scenePath, position, product }) => {
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();
  const frameSpeed = product
    ? (mesh.current.rotation.y += 0.005)
    : (mesh.current.rotation.x = mesh.current.rotation.y += 0.01);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh
      ref={mesh}
      position={position}
      rotateX={!product ? Math.PI / 2 : null}
    >
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Modal;
