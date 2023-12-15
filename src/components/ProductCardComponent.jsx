import React from 'react';
import styled from 'styled-components';
import PrimaryButtonComponent from './PrimaryButton';

const Card = styled.div`
    margin: 1rem;
    background: #FEFEFE;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    margin: 1rem;
`;
const CardTextContainer = styled.div`
    display: grid;
    text-align: left;
    padding: 1.5rem;
`
const CardTitle = styled.h4`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 34px;
    text-transform: uppercase;
    color: #9F0000;
`;
const CardText = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 14px;
    color: #0D0909;
    padding: 1rem 0;
    line-break: auto;
`
const CardImage = styled.img`
    width: 80%;
`;

function ProductCardComponent({ name, image, category, id, price }) {
  return //<Link to={`/menu/${category}/${id}`}>
        <Card>
            <div className='d-flex justify-content-center'>
                <CardImage src={image}></CardImage>
            </div>
            <CardTextContainer>
                <CardTitle>{name}</CardTitle>
                <div className='d-flex justify-content-between align-items-center'>
                    <CardText>{price}</CardText>
                    <PrimaryButtonComponent text="Add To Cart" link='/order'></PrimaryButtonComponent>
                </div>
            </CardTextContainer>
        </Card>
    //</Link>
    ;
}

export default ProductCardComponent;