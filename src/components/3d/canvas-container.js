import React, {Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import {Box} from '@chakra-ui/core';
import Modal from './modal';
import { OrbitControls } from '@react-three/drei';

/**
 * A container with a set width to hold the canvas
 */
const CanvasContainer = () => {
    return (
        <Box h={800} w={800}>
            <Canvas
                colorManagement
                camera={{
                    position: [0, 30, 30],
                    fov: 75
                }}
            > 
                <Suspense fallback={null}>
                    <mesh position={[0,10,0]}>
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <directionalLight position={[-10, -10, -5]} intensity={1} />
                    <Modal/>
                    <OrbitControls/>
                    </mesh>
                   
                </Suspense>
            </Canvas>
        </Box>
    )
}

export default CanvasContainer;