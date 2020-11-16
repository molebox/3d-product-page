import React from 'react';

const ModelLights = () => (
  <>
    <directionalLight position={[10, 10, 5]} intensity={2} />
    <directionalLight position={[-10, -10, -5]} intensity={1} />
  </>
);

export default ModelLights;
