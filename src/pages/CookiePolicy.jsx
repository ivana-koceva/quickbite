import HeadingComponent  from '../components/HeadingComponent'
import ParagraphComponent from '../components/ParagraphComponent'
import PrimaryButtonComponent  from '../components/PrimaryButton'
import SecondaryButtonComponent  from '../components/SecondaryButton'
import CategoryCardComponent  from '../components/CategoryCardComponent'
import styled from 'styled-components';
import SubheadingComponent1 from '../components/SubheadingComponent1'
import SubheadingComponent2 from '../components/SubheadingComponent2'
import OverviewTextComponent from '../components/OverviewTextComponent'
import SubheadingComponent3 from '../components/SubheadingComponent3'


const CookieTextContainer = styled.div`
  padding: 1rem 0;
`
const CookieText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
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
function CookiePolicy() {
  return (
    <> 
    <div className='container' style={{ padding: '5rem 0'}}>
      <SubheadingComponent1 text='Cookie Policy'></SubheadingComponent1>
      <OverviewTextComponent text="
      At QuickCrunch, we value your privacy and aim to provide you with the best online experience possible. 
      This Cookie Policy explains how we use cookies and similar technologies on our website to enhance your browsing experience.">
      </OverviewTextComponent>

<div className='my-5'>
  <CookieTextContainer>
      <SubheadingComponent3 text='What Are Cookies?'></SubheadingComponent3>
      <CookieText>
      Cookies are small text files that are stored on your device (computer, tablet, mobile phone) when you visit a website. They help us recognize your device and provide you with a more personalized experience. 
      Cookies also enable us to analyze how our website is used and improve its performance.
      </CookieText>
  </CookieTextContainer>

  <CookieTextContainer>
      <SubheadingComponent3 text='How We Use Cookies'></SubheadingComponent3>
      <CookieText>
      QuickCrunch uses cookies for various purposes, including:

    Functional Cookies: These cookies are essential for the proper functioning of our website. They enable you to navigate our site and use its features.

    Analytical Cookies: We use these cookies to gather information about how visitors interact with our website. This helps us analyze and improve our site's performance, making it easier to use and ensuring that the content is relevant to our visitors.

    Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an ad and measure the effectiveness of our advertising campaigns.
      </CookieText>
    </CookieTextContainer>

    <CookieTextContainer>
      <SubheadingComponent3 text='Your Cookie Choices'></SubheadingComponent3>
      <CookieText>
      You have the option to manage or delete cookies based on your preferences. 
      Most web browsers allow you to control cookies through their settings. 
      Please note that by disabling certain cookies, you may limit the functionality of our website or
       certain features may not work as intended.
      </CookieText>
      </CookieTextContainer>

      <CookieTextContainer>
        <SubheadingComponent3 text='Updates to Our Cookie Policy'></SubheadingComponent3>
        <CookieText>
        We may update our Cookie Policy from time to time. Any changes will be posted on this page, 
        so we encourage you to review this policy periodically for any updates.
        </CookieText>
      </CookieTextContainer>
    </div>
    </div>
    </>
  )
}

export default CookiePolicy;
