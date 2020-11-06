import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import ModalLights from './modal-lights';

// The modal => https://sketchfab.com/3d-models/basket-bullet-10-lb-d18692ce01d74c368ab953812e3b80d0

const BasketballModal = ({ scenePath, position }) => {
  const [onHover, setOnHover] = React.useState(false);
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.025));
  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setOnHover({ onHover: !onHover })}
    >
      <ModalLights />
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default BasketballModal;
