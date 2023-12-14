import HeadingComponent  from '../components/HeadingComponent'
import ParagraphComponent from '../components/ParagraphComponent'
import PrimaryButtonComponent  from '../components/PrimaryButton'
import SecondaryButtonComponent  from '../components/SecondaryButton'
import CategoryCardComponent  from '../components/CategoryCardComponent'
import styled from 'styled-components';
import SubheadingComponent1 from '../components/SubheadingComponent1'
import SubheadingComponent2 from '../components/SubheadingComponent2'
import SubheadingComponent3 from '../components/SubheadingComponent3'
import OverviewTextComponent from '../components/OverviewTextComponent'

const TermsTextContainer = styled.div`
  padding: 1rem 0;
`
const TermsText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #0D0909;
  text-align: left;
  line-break: auto;

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
function TermsAndConditions() {
  return (
    <> 
    <div className='container' style={{ padding: '5rem 0'}}>
      <SubheadingComponent1 text='Terms and Conditions'></SubheadingComponent1>
      <OverviewTextComponent text="
      Welcome to QuickCrunch! These Terms and Conditions outline the rules and regulations for the use of our website and services.
      By accessing this website, we assume you accept these Terms and Conditions. Do not continue to use QuickCrunch's website if you do not agree to all the terms and conditions stated on this page.
      "></OverviewTextComponent>

    <TermsTextContainer>
      <SubheadingComponent3 text='Use of Website'></SubheadingComponent3>
      <TermsText>
      Access to our website is permitted on a temporary basis, and we reserve the right to withdraw or amend the service without notice.
      <br />
      You are responsible for ensuring that any information or content you provide us through our website is accurate and does not violate any laws or third-party rights.
      </TermsText>
    </TermsTextContainer>

    <TermsTextContainer>
      <SubheadingComponent3 text='Intellectual Property'></SubheadingComponent3>
      <TermsText>
      All content, trademarks, logos, and intellectual property displayed on our website are the property of QuickCrunch and are protected by copyright laws. You are not permitted to use or reproduce any content without our prior written consent.
      </TermsText>
    </TermsTextContainer>

    <TermsTextContainer>
      <SubheadingComponent3 text='Privacy Policy'></SubheadingComponent3>
      <TermsText>
      Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our website, you agree to the collection and use of your information in accordance with our Privacy Policy.
      </TermsText>
    </TermsTextContainer>

    <TermsTextContainer>
      <SubheadingComponent3 text='Limitation of Liability'></SubheadingComponent3>
      <TermsText>
      QuickCrunch shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website.
      </TermsText>
    </TermsTextContainer>

    <TermsTextContainer>
      <SubheadingComponent3 text='Changes to Terms'></SubheadingComponent3>
      <TermsText>
      QuickCrunch reserves the right to revise these Terms and Conditions at any time without prior notice. By using this website, you are expected to review these terms on a regular basis.
      </TermsText>
    </TermsTextContainer>
    </div>
    </>
  )
}

export default TermsAndConditions;
