import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #0D0909;
    text-align: left;
    line-break: auto;
`;

function ParagraphComponent({ text }) {
  return <Paragraph>{text}</Paragraph>;
}

export default ParagraphComponent;