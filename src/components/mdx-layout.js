import React from 'react';
import { Flex, Grid } from '@chakra-ui/core';
import { Loader } from '@react-three/drei';

// Inspiration => https://dribbble.com/shots/4541416-Nike-Vapormax-Product-Page-Motion/attachments/4541416-Nike-Vapormax-Product-Page-Motion?mode=media

const mobile = `
'icon    .'
'product  product'
'text text'
`;
const desktop = `
'edge   .       .         .'
'edge   text    product   .'
`;

/**
 * The base layout for the MDX pages. You can configure this to set how your pages layout should be.
 */
const MDXLayout = ({ children }) => {
  return (
    <Grid
      templateColumns={['1fr', '10% 1fr 1fr 10% ']}
      templateRows={['10% 1fr 1fr', '10% 1fr 1fr']}
      templateAreas={[mobile, desktop]}
      bg="brand.background"
      h="100vh"
    >
      {children}
      {/* An overlay that shows a loading percentage, when the loading is done it removes itself */}
      <Loader
        containerStyles={{
          margin: '0 auto',
        }}
      />
    </Grid>
  );
};

export default MDXLayout;
