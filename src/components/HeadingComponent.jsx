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

    @media (max-width: 1400px) {
      font-size: 2.2rem;
    }
    @media (max-width: 1200px) {
      font-size: 2.1rem;
    }
    @media (max-width: 992px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media (max-width: 576px) {
      font-size: 1.8rem;
    }
`;

function HeadingComponent({ text }) {
  return <Heading>{text}</Heading>;
}

export default HeadingComponent;