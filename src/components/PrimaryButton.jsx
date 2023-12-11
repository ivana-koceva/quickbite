import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
    background: #BB0000;
    border-radius: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    padding: 10px 24px;
`;

function PrimaryButtonComponent({ text }) {
  return (<Button>
            {text}
        </Button>);
}

export default PrimaryButtonComponent;