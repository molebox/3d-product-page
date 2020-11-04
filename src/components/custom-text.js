import React from 'react';
import styled from '@emotion/styled';

const Custom = styled.p`
  transform: ${(props) => (props.vertical ? 'rotate(270deg)' : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
  letter-spacing: 10px;
  cursor: default;
  -webkit-text-stroke: 2px ${(props) => (props.color ? props.color : '#5C5C5C')};
  -webkit-text-fill-color: transparent;
`;

const CustomText = ({ text, fontSize, color, vertical }) => {
  return (
    <Custom fontSize={fontSize} color={color} vertical={vertical}>
      {text}
    </Custom>
  );
};

export default CustomText;
