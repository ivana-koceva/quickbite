import React from 'react';
import { useCart } from '../context/CartContext';
import HeadingComponent from '../components/HeadingComponent';
import ParagraphComponent from '../components/ParagraphComponent';
import styled from 'styled-components';
import SubheadingComponent1 from '../components/SubheadingComponent1';

const ProductCardWrapper = styled.div`
    background: #FEFEFE;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    margin: 2rem 0;
    padding: 2rem;
    display: flex;
    width: fit-content;
    align-items: center;
    @media (max-width: 768px) {
        display: grid;
      }
`

const CardTitle = styled.h3`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1.8rem;
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
const CardTextContainer = styled.div`
      padding: 0 5rem;
      @media (max-width: 1400px) {
        padding: 0 4rem;
      }
      @media (max-width: 1200px) {
        padding: 0 3rem;
      }
      @media (max-width: 992px) {
        padding: 0 2rem;
      }
      @media (max-width: 768px) {
        padding: 0 1rem;
      }
      @media (max-width: 576px) {
        padding: 0 0.5rem;
      }
`;
const CardText = styled.text`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.2rem;
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
const CardQuantityText = styled.p`
    font-family: 'Montserrat';
    font-weight: 400;
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
    width: 200px;
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
    font-size: 14px;
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

function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className='container my-5 py-5 px-5'>
      <SubheadingComponent1 text="Your Cart"></SubheadingComponent1>
      {cartItems.length === 0 ? (
        <ParagraphComponent text="Your cart is empty"></ParagraphComponent>
      ) : (
        <div className='d-flex justify-content-center'>
        <div>
          {cartItems.map((item, index) => (
            <ProductCardWrapper key={index}>
                <div>
                <CardImage src={item.image}></CardImage>
                </div>
                <CardTextContainer>
                <CardTitle>{item.name} </CardTitle>
                <CardText>${item.price}</CardText> 
                
                <CardQuantityText> Quantity: {item.quantity}</CardQuantityText>
                </CardTextContainer>
                <div>
              <Button onClick={() => handleRemoveFromCart(item.id)}>
                <ButtonText>
                    Remove
                </ButtonText>
            </Button>
            </div>
            </ProductCardWrapper>
          ))}
            <Button onClick={handleClearCart}>
                <ButtonText>Clear Cart</ButtonText>
            </Button>
        </div>
        </div>
      )}
    </div>
  );
  }
  
  export default Cart;
  