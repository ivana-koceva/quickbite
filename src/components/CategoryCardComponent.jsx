import React from 'react';
import styled from 'styled-components';

const Card = styled.button`
    border: 1px solid #BB0000;
    border-radius: 15px;
    margin: 1rem;
    display: grid;
    padding: 1rem 1.5rem;
    background: transparent;
`;

const CardTitle = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
`;

const CardImage = styled.img`
    width: 120px;
`;

function CategoryCardComponent({ text, image }) {
  return <Card>
            <CardImage src={image}></CardImage>
            <CardTitle>{text}</CardTitle>
    </Card>;
}

export default CategoryCardComponent;