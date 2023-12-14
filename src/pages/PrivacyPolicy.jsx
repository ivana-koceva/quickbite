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

const PrivacyTextContainer = styled.div`
  padding: 1rem 0;
`
const PrivacyText = styled.p`
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
function PrivacyPolicy() {
  return (
    <> 
    <div className='container' style={{ padding: '5rem 0'}}>
      <SubheadingComponent1 text='Privacy Policy'></SubheadingComponent1>
      <OverviewTextComponent text="At QuickCrunch, we are committed to protecting your privacy and ensuring the security of your personal information. 
      This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us when using our website or services.">
      </OverviewTextComponent>

<div className='my-5'>
  <PrivacyTextContainer>
      <SubheadingComponent3 text='Information Collection and Use'></SubheadingComponent3>
      <PrivacyText>
      We may collect personal information, such as your name, email address, phone number, and location when you voluntarily provide it to us for purposes including but not limited to placing orders, subscribing to newsletters, or participating in promotions.
      <br/>
      We may also collect non-personal information such as your IP address, browser type, and pages visited to improve our website's performance and enhance your browsing experience.
      </PrivacyText>
  </PrivacyTextContainer>

  <PrivacyTextContainer>
      <SubheadingComponent3 text='Use of Information'></SubheadingComponent3>
      <PrivacyText>
      The information collected may be used to process your orders, improve our services, personalize your experience, and communicate with you about promotions, offers, and updates related to QuickCrunch.
      <br/>
      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for trusted third parties who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
      </PrivacyText>
    </PrivacyTextContainer>

    <PrivacyTextContainer>
      <SubheadingComponent3 text='Data Security'></SubheadingComponent3>
      <PrivacyText>
      QuickCrunch implements industry-standard security measures to protect your personal information from unauthorized access, misuse, disclosure, alteration, or destruction.
      <br />
        Despite our efforts to protect your data, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </PrivacyText>
      </PrivacyTextContainer>

      <PrivacyTextContainer>
        <SubheadingComponent3 text='Your Rights'></SubheadingComponent3>
        <PrivacyText>
        You have the right to access, update, or delete your personal information. If you wish to do so or have any questions about your information, please contact us using the information provided below.
        </PrivacyText>
      </PrivacyTextContainer>
    </div>
    </div>
    </>
  )
}

export default PrivacyPolicy;
