import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    text-transform: uppercase;
    color: #BB0000;
    text-align: left;
`;

function HeadingComponent({ text }) {
  return <Heading>{text}</Heading>;
}

export default HeadingComponent;