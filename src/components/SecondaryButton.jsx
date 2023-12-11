import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
    border: 1px solid #BB0000;
    border-radius: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
    padding: 10px 24px;
`;

function SecondaryButtonComponent({ text }) {
  return (<Button>
            {text}
        </Button>);
}

export default SecondaryButtonComponent;