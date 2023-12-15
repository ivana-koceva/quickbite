import React from 'react';
import styled from 'styled-components';
import PrimaryButtonComponent from './PrimaryButton';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

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
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Modal = styled.div`
  background-color: #FFFFFF;
  padding: 20px 35px;
  border-radius: 25px;
  max-width: 400px;
  text-align: center;
`
const ModalTitle = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  color: #BB0000;
  text-align: center;
`
const ModalText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  color: #0D0909;
`
function ProductCardComponent({ name, image, category, id, price, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = { id, name, image, price, quantity };
    
    addToCart(item);

    setShowModal(false);
  };

  return <Card className='my-2 mx-2'>
            <div className='d-flex justify-content-center'>
                <CardImage src={image}></CardImage>
            </div>
            <CardTextContainer>
                <CardTitle>{name}</CardTitle>
                <div className='d-flex justify-content-between align-items-center'>
                    <CardText>$ {price}</CardText>
                    <div>
                    <Button onClick={() => setShowModal(true)}><ButtonText>Add To Cart</ButtonText></Button>
                    </div>
                </div>
            </CardTextContainer>
            {showModal && (
              <ModalOverlay>
              <Modal className='px-5'>
                <div onClick={() => setShowModal(false)} className='text-end my-2'>
                  <IoCloseOutline size={'30px'}></IoCloseOutline>
                </div>
                <img src={image} alt={name} style={{ width: '280px' }}/>
                <ModalTitle>{name}</ModalTitle>
                <ModalText>Price: ${price}</ModalText>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min={"1"}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  style={{border: '1px solid #0D0909', borderRadius: '10px', fontFamily: 'Montserrat', fontWeight: '300', width: '95%',
                  fontSize: '13px', color: '#0D0909', padding: '12px 19px', background: 'transparent', textAlign: 'center'}}
                />
                <div className='d-flex justify-content-between my-3'>
                  <Button onClick={() => setShowModal(false)} style={{border: '1px solid #9F0000', borderRadius: '24px', fontFamily: 'Montserrat', fontWeight: '400',
              fontSize: '16px', color: '#9F0000', padding: '10px 40px', background: 'transparent', textTransform: 'capitalize', marginRight: '2rem'}}>Cancel</Button>
                  <Button onClick={handleAddToCart} style={{border: '1px solid #9F0000', borderRadius: '24px', fontFamily: 'Montserrat', fontWeight: '400',
              fontSize: '16px', color: '#FFFFFF', padding: '10px 50px', background: '#9F0000', textTransform: 'capitalize'}}>Add</Button>
                </div>
              </Modal>
            </ModalOverlay>
      )}
        </Card>;
}

export default ProductCardComponent;