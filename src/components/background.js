import React from 'react';
import Particles from 'react-particles-js';

const Background = () => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 25,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  </div>
);

export default Background;
