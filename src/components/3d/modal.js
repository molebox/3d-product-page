import React from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

// The modal => https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725

// Add this text somewhere => This work is based on "Air Jordan 1" (https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725) by makoto (https://sketchfab.com/lu87813) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

const Modal = () => {
  const gltf = useGLTF('/scene.gltf', true);
  const mesh = React.useRef();
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh} position={[0, 10, 0]} rotateX={Math.PI / 2}>
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <primitive object={gltf.scene} dispose={null} />
      <OrbitControls />
    </mesh>
  );
};

export default Modal;
