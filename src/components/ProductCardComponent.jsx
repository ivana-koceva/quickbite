import React from 'react';
import styled from 'styled-components';
import PrimaryButtonComponent from './PrimaryButton';

const Card = styled.div`
    background: #FEFEFE;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
`;
const CardTextContainer = styled.div`
    display: grid;
    text-align: left;
    padding: 1.5rem;
`
const CardTitle = styled.h4`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #9F0000;
    padding-bottom: 2rem;

    @media (max-width: 1400px) {
        font-size: 1.3rem;
      }
      @media (max-width: 1200px) {
        font-size: 1.1rem;
        padding-bottom: 1.5rem;
      }
      @media (max-width: 992px) {
        font-size: 1.0rem;
      }
      @media (max-width: 768px) {
        font-size: 0.9rem;
        padding-bottom: 1rem;
      }
      @media (max-width: 576px) {
        font-size: 0.8rem;
      }
`;
const CardText = styled.text`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1rem;
    color: #0D0909;

    @media (max-width: 1400px) {
        font-size: 0.9rem;
      }
      @media (max-width: 1200px) {
        font-size: 0.9rem;
      }
      @media (max-width: 992px) {
        font-size: 0.8rem;
      }
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
      @media (max-width: 576px) {
        font-size: 0.8rem;
      }
`
const CardImage = styled.img`
    width: 160px;
    padding-top: 2rem;
`;
const Button = styled.button`
    background: #BB0000;
    border-radius: 24px;
    padding: 11px 25px;
    display: flex;
    align-items: center;

    @media (max-width: 1400px) {
        padding: 10px 24px;
    }
    @media (max-width: 1200px) {
        padding: 9px 23px;
    }
    @media (max-width: 992px) {
        padding: 9px 23px;
    }
    @media (max-width: 768px) {
        padding: 8px 22px;
    }
`

const ButtonText = styled.text`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;

    @media (max-width: 1400px) {
        font-size: 0.9rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.8rem;
    }
    @media (max-width: 992px) {
        font-size: 0.8rem;
    }
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`

function ProductCardComponent({ name, image, category, id, price }) {
  return <Card className='my-2 mx-2'>
            <div className='d-flex justify-content-center'>
                <CardImage src={image}></CardImage>
            </div>
            <CardTextContainer>
                <CardTitle>{name}</CardTitle>
                <div className='d-flex justify-content-between align-items-center'>
                    <CardText>$ {price}</CardText>
                    <div>
                    <Button><ButtonText>Add To Cart</ButtonText></Button>
                    </div>
                </div>
            </CardTextContainer>
        </Card>;
}

export default ProductCardComponent;