import React from 'react';
import styled from 'styled-components';
import Burger from '../images/cheeseburger.png'
import Fries from '../images/fries.png'
import Wrap from '../images/wrap.png'
import Salad from '../images/salad.png'
import Sweets from '../images/sundae.png'
import Drinks from '../images/coffee.png'

const CategoryButtonWrapper = styled.span`
`;
const CategoryButton = styled.button`
    background: #FCFCFC;
    border-radius: 56px;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    margin: 1rem 0;
    width: 200px;

    :hover {
        background: #F9F9F9;
    }

    :active {
        background: #9F0000;
        color: #FFFFFF;
    }
`
const CategoryImage = styled.img`
    width: 25px;
    margin: 0 0.5rem;
`
const CategoryTitle = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    text-transform: capitalize;
    color: #BB0000;
    margin: 0 0.5rem;
`
function MenuComponent() {
  return <div>
  
        <CategoryButton>
            <CategoryImage src={Burger}></CategoryImage>
            <CategoryTitle>Burger</CategoryTitle>
        </CategoryButton>
        <CategoryButton>
            <CategoryImage src={Fries}></CategoryImage>
            <CategoryTitle>Fries</CategoryTitle>
        </CategoryButton>
        <CategoryButton>
            <CategoryImage src={Wrap}></CategoryImage>
            <CategoryTitle>Wraps</CategoryTitle>
        </CategoryButton>
        <CategoryButton>
            <CategoryImage src={Salad}></CategoryImage>
            <CategoryTitle>Salads</CategoryTitle>
        </CategoryButton>
        <CategoryButton>
            <CategoryImage src={Sweets}></CategoryImage>
            <CategoryTitle>Sweets</CategoryTitle>
        </CategoryButton>
        <CategoryButton>
            <CategoryImage src={Drinks}></CategoryImage>
            <CategoryTitle>Drinks</CategoryTitle>
        </CategoryButton>
    </div>;
}

export default MenuComponent;