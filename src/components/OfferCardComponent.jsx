import React from 'react';
import styled from 'styled-components';
import PrimaryButtonComponent from './PrimaryButton';

const Card = styled.div`
    box-sizing: border-box;
    border: 1px solid #9F0000;
    border-radius: 25px;
    margin: 1rem;
`;
const CardTextContainer = styled.div`
    display: grid;
    text-align: left;
    padding: 2rem 1.4rem;
`
const CardTitle = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 36px;
    text-transform: uppercase;
    color: #9F0000;
`;
const CardText = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #0D0909;
    padding: 1rem 0;
    line-break: auto;
    margin-bottom: 1rem;
`
const CardImage = styled.img`
    border-radius: 25px 25px 0 0;
    width: 400px;
`;

function OfferCardComponent({ title, text, image }) {
  return <Card>
            <CardImage src={image}></CardImage>
            <CardTextContainer>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <span>
                <PrimaryButtonComponent text="Order now"></PrimaryButtonComponent>
                </span>
            </CardTextContainer>
    </Card>;
}

export default OfferCardComponent;