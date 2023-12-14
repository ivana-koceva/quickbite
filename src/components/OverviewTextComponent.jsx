import React from 'react';
import styled from 'styled-components';

const OverviewText = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 18px;
    color: #0D0909;
    text-align: center;

    @media (max-width: 1400px) {
      font-size: 0.9rem;
    }
    @media (max-width: 1200px) {
      font-size: 0.9rem;
    }
    @media (max-width: 992px) {
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
`;

function OverviewTextComponent({ text }) {
  return <OverviewText>{text}</OverviewText>;
}

export default OverviewTextComponent;