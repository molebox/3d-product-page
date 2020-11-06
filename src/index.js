import React from 'react';
import ReactDOM from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  SimpleGrid,
  Stack,
  ChakraProvider,
  Link,
  Image,
} from '@chakra-ui/core';
import theme from './theme';
import { MDXRoutes } from './components/mdx-routes.js';
import MDXLayout from './components/mdx-layout';
import Product from './components/3d/product';
import Basketball from './components/3d/basketball';
import CustomText from './components/custom-text';
import GlitchText from './components/glitch-text';

const components = {
  wrapper: (props) => <MDXLayout {...props}>{props.children}</MDXLayout>,
  h1: (props) => (
    <Text as="h1" fontSize="6xl" {...props}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text as="h2" fontSize="5xl" {...props}>
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text as="h3" fontSize="4xl" {...props}>
      {props.children}
    </Text>
  ),
  h4: (props) => (
    <Text as="h4" fontSize="3xl" {...props}>
      {props.children}
    </Text>
  ),
  h5: (props) => (
    <Text as="h5" fontSize="2xl" {...props}>
      {props.children}
    </Text>
  ),
  h6: (props) => (
    <Text as="h6" fontSize="xl" {...props}>
      {props.children}
    </Text>
  ),
  p: (props) => <Text {...props}>{props.children}</Text>,
  Text,
  Box,
  Flex,
  Heading,
  Grid: (props) => <Grid {...props}>{props.children}</Grid>,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Product,
  CustomText,
  Basketball,
  GlitchText,
};

ReactDOM.render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <ChakraProvider theme={theme}>
        <MDXRoutes />
      </ChakraProvider>
    </MDXProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
