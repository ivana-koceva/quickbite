import React from 'react';
import styled from 'styled-components';
import Logo from '../images/quickbitecolor.png'
import PrimaryButtonComponent from './PrimaryButton';

const Header = styled.div`
    height: 80px;
    background: #FCFCFC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    padding: 0 5rem;
`
const HeaderLinkContainer = styled.span`
    display: flex;
    justify-content: space-evenly;
    text-align: right;
`
const HeaderLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    color: #0D0909;
    margin: 0 2.5rem;
`
const HeaderImage = styled.img`
    width: 60px;
`

function HeaderComponent() {
  return <Header>
    <a href='/'>
        <HeaderImage src={Logo}></HeaderImage>
    </a>
    <HeaderLinkContainer>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/menu'>Our Menu</HeaderLink>
        <HeaderLink href='/join-us'>Join Our Team</HeaderLink>
        <HeaderLink href='/about-us'>Our Story</HeaderLink>
    </HeaderLinkContainer>
    <span>
        <PrimaryButtonComponent text="Place order"></PrimaryButtonComponent>
    </span>
  </Header>;
}

export default HeaderComponent;