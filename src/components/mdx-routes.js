import React from 'react';
import { Flex, Link, Heading, Spacer, Text, CSSReset } from '@chakra-ui/core';
import {
  Link as ReactRouterLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PageOne from '../pages/page-one.mdx';


/**
 * The routes for the app. When adding new pages add a new route and a corresponding nav link in the Nav component above. Import the new page and add it to the route.
 */
export const MDXRoutes = () => (
  <Router>
    <CSSReset />
    <Routes>
      <Route path="/" element={<PageOne />} />
    </Routes>
  </Router>
);
