import React from 'react';
import { Box, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from '../pages/page-one.mdx';
import Background from './background';

/**
 * The routes for the app. When adding new pages add a new route and a corresponding nav link in the Nav component above. Import the new page and add it to the route.
 */
export const MDXRoutes = () => (
  <Router>
    <CSSReset />
    <Box
      position="relative"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex="99999"
    >
      <Background />
      <Routes>
        <Route path="/" element={<PageOne />} />
      </Routes>
    </Box>
  </Router>
);
