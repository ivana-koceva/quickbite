import React from 'react';
import styled from 'styled-components';
import Logo from '../images/quickbite.png'

const Footer = styled.span`
    //height: 333px;
    padding: 2rem;
    background: #9F0000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 767px) {
        display: grid;
        justify-content: center;
    }
`
const FooterLinkContainer = styled.div`
    display: grid;
    text-align: left;
    margin: 0 4rem;
    @media (max-width: 767px) {
        margin: 2rem 1rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-evenly;
    @media (max-width: 767px) {
        display: grid;
    }
`
const FooterTitle = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
`
const FooterLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0.5rem 0;
`

const FooterImage = styled.img`
    width: 180px;
`
const ImageLink = styled.a`
    margin: 2rem auto;
`
function FooterComponent() {
  return <Footer>
    <ImageLink href='/'>
        <FooterImage src={Logo}>
        </FooterImage>
    </ImageLink>
    <FooterLinksWrapper>
        <FooterLinkContainer>
            <FooterTitle>About Us</FooterTitle>
            <FooterLink href='/'>Home</FooterLink>
            <FooterLink href='/menu'>Our Menu</FooterLink>
            <FooterLink href='/join-us'>Join Our Team</FooterLink>
            <FooterLink href='/about-us'>Our Story</FooterLink>
        </FooterLinkContainer>
        <FooterLinkContainer>
            <FooterTitle>Customer Care</FooterTitle>
                <FooterLink href='/'>Cookies</FooterLink>
                <FooterLink href='/'>Privacy Policy</FooterLink>
                <FooterLink href='/'>Terms & Conditions</FooterLink>
        </FooterLinkContainer>
        <FooterLinkContainer>
            <FooterTitle>Follow Us</FooterTitle>
                <FooterLink href='/'>Home</FooterLink>
                <FooterLink href='/'>Our Menu</FooterLink>
                <FooterLink href='/'>Join Our Team</FooterLink>
        </FooterLinkContainer>
    </FooterLinksWrapper>
  </Footer>;
}

export default FooterComponent;