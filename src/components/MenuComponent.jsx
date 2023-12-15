import React from 'react';
import styled from 'styled-components';
import Burger from '../images/cheeseburger.png'
import Fries from '../images/fries.png'
import Wrap from '../images/wrap.png'
import Salad from '../images/salad.png'
import Sweets from '../images/sundae.png'
import Drinks from '../images/coffee.png'
import { Link } from 'react-router-dom';

const CategoriesWrapper = styled.div`
    @media (max-width: 991px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
const CategoryButton = styled.button`
    background: #FCFCFC;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    margin: 1rem 1rem;
    width: 200px;

    &:hover {
        background: #F9F9F9;

        h6 {
            color: #9F0000;
            font-weight: 500;
            transition: 100ms;
            transition-timing-function: ease-in-out;
        }
    }
    
    @media (max-width: 991px) {
        margin: 0.5rem;
        width: 175px;
        padding: 0.8rem;
    }
    @media (max-width: 768px) {
        width: 150px;
        margin: 0.3rem;
        padding: 0.5rem;
    }
`
const CategoryImage = styled.img`
    width: 30px;
    margin: 0 0.5rem;
    @media (max-width: 991px) {
        width: 28px;
    }
    @media (max-width: 768px) {
        width: 26px;
    }
`
const CategoryTitle = styled.h6`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    color: #0D0909;
    margin: 0 0.5rem;
    @media (max-width: 991px) {
        margin: 0.3rem;
        font-size: 0.9rem;
    }
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`
function MenuComponent() {
  return <CategoriesWrapper>
        <Link to="/menu/burgers">
            <CategoryButton>
                <CategoryImage src={Burger}></CategoryImage>
                <CategoryTitle>Burgers</CategoryTitle>
            </CategoryButton>
        </Link>
        <Link to="/menu/fries">
            <CategoryButton>
                <CategoryImage src={Fries}></CategoryImage>
                <CategoryTitle>Fries</CategoryTitle>
            </CategoryButton>
        </Link>
        <Link to="/menu/wraps">
            <CategoryButton>
                <CategoryImage src={Wrap}></CategoryImage>
                <CategoryTitle>Wraps</CategoryTitle>
            </CategoryButton>
        </Link>
        <Link to="/menu/salads">
            <CategoryButton>
                <CategoryImage src={Salad}></CategoryImage>
                <CategoryTitle>Salads</CategoryTitle>
            </CategoryButton>
        </Link>
        <Link to="/menu/sweets">
            <CategoryButton>
                <CategoryImage src={Sweets}></CategoryImage>
                <CategoryTitle>Sweets</CategoryTitle>
            </CategoryButton>
        </Link>
        <Link to="/menu/drinks">
            <CategoryButton>
                <CategoryImage src={Drinks}></CategoryImage>
                <CategoryTitle>Drinks</CategoryTitle>
            </CategoryButton>
        </Link>
    </CategoriesWrapper>;
}

export default MenuComponent;