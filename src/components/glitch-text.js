import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;

  &:hover {
    &:before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;k
      height: 100%;

      left: 2px;
      text-shadow: -1px 0 #d6d6d6;
      background: #090d12;

      overflow: hidden;
      animation: noise-anim-2 5s infinite linear alternate-reverse;
    }

    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      left: -2px;
      text-shadow: -1px 0 #d6d6d6;
      background: #090d12;
      overflow: hidden;
      animation: noise-anim 1s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(100% 0 1% 0);
      }
      5% {
        clip-path: inset(45% 0 41% 0);
      }
      10% {
        clip-path: inset(8% 0 18% 0);
      }
      15% {
        clip-path: inset(94% 0 7% 0);
      }
      20% {
        clip-path: inset(23% 0 69% 0);
      }
      25% {
        clip-path: inset(21% 0 28% 0);
      }
      30% {
        clip-path: inset(92% 0 3% 0);
      }
      35% {
        clip-path: inset(2% 0 35% 0);
      }
      40% {
        clip-path: inset(80% 0 1% 0);
      }
      45% {
        clip-path: inset(75% 0 9% 0);
      }
      50% {
        clip-path: inset(37% 0 3% 0);
      }
      55% {
        clip-path: inset(59% 0 3% 0);
      }
      60% {
        clip-path: inset(26% 0 67% 0);
      }
      65% {
        clip-path: inset(75% 0 19% 0);
      }
      70% {
        clip-path: inset(84% 0 2% 0);
      }
      75% {
        clip-path: inset(92% 0 6% 0);
      }
      80% {
        clip-path: inset(10% 0 58% 0);
      }
      85% {
        clip-path: inset(58% 0 23% 0);
      }
      90% {
        clip-path: inset(20% 0 59% 0);
      }
      95% {
        clip-path: inset(50% 0 32% 0);
      }
      100% {
        clip-path: inset(69% 0 9% 0);
      }
    }
  }
`;

export default ({ children }) => {
  return <Container data-text={children}>{children}</Container>;
};
