import React from 'react';
import {useGLTF} from '@react-three/drei';

// The modal => https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725

// Add this text somewhere => This work is based on "Air Jordan 1" (https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725) by makoto (https://sketchfab.com/lu87813) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

const Modal = () => {
    const gltf = useGLTF('/scene.gltf', true);
    console.log({gltf})
    return (
        <primitive object={gltf.scene} dispose={null}/>
    );
}

export default Modal;