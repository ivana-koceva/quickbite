import React from 'react';
import styled from 'styled-components';
import Logo from '../images/quickbitecolor.png'
import PrimaryButtonComponent from './PrimaryButton';
import { IoCartOutline } from "react-icons/io5";

const Header = styled.header`
    background: #FCFCFC;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`
const HeaderLinkContainer = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`
const HeaderLink = styled.a`
    padding: 0 2rem;
`
const HeaderImage = styled.img`
    width: 50px;
    padding: 0.5rem 0;
`

function HeaderComponent() {
  return <Header className='d-flex justify-content-around align-items-center'>
    <a href='/'>
        <HeaderImage src={Logo}></HeaderImage>
    </a >
    <HeaderLinkContainer>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/menu'>Our Menu</HeaderLink>
        <HeaderLink href='/about-us'>Our Story</HeaderLink>
        {/* <HeaderLink href='/contact-us'>Reach Out</HeaderLink> */}
        <HeaderLink href='/cart'>
            <IoCartOutline size={"24px"}></IoCartOutline>
        </HeaderLink>
    </HeaderLinkContainer>
  </Header>;
}

export default HeaderComponent;