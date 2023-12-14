import React from 'react';
import styled from 'styled-components';

const Card = styled.button`
    border: 1px solid #BB0000;
    border-radius: 15px;
    margin: 1rem;
    display: grid;
    background: transparent;

    &:hover {
        background: #F6F6F6;
        transition: 100ms;
        transition-timing-function: ease-in-out;
    }
`;

const CardTitle = styled.h6`
    font-family: 'Montserrat';
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
    font-weight: 300;
    padding-bottom: 0.5rem;
`;

const CardImage = styled.img`
    width: 130px;
    padding: 0.5rem;
`;

function CategoryCardComponent({ text, image }) {
  return <Card>
            <CardImage src={image}></CardImage>
            <CardTitle>{text}</CardTitle>
    </Card>;
}

export default CategoryCardComponent;