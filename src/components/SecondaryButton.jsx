import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid #BB0000;
    border-radius: 24px;
    padding: 11px 25px;
    background-color: transparent;
`

const ButtonText = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
`
function SecondaryButtonComponent({ text }) {
  return (<Button>
            <ButtonText>
                {text}
            </ButtonText>
        </Button>);
}

export default SecondaryButtonComponent;