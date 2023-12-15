import styled from 'styled-components';
import AboutUs from '../images/about_food.png'
import HeadingComponent from '../components/HeadingComponent';
import ParagraphComponent from '../components/ParagraphComponent';
import OverviewTextComponent from '../components/OverviewTextComponent';
import SubheadingComponent1 from '../components/SubheadingComponent1';
import SubheadingComponent3 from '../components/SubheadingComponent3';
import SubheadingComponent2 from '../components/SubheadingComponent2';
import Logo from '../images/quickbite.png'

const AboutContainerWrapper = styled.div`
  background-image: linear-gradient(to left, rgba(15, 17, 16, 0.7), rgba(15, 17, 16, 0.7)), url(${AboutUs});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 13rem;
`
const AboutTextWrapper = styled.div`
    padding: 1rem 0;
`
const AboutText = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 14px;
    color: #0D0909;

    @media (max-width: 1400px) {
      font-size: 0.8rem;
    }
    @media (max-width: 1200px) {
      font-size: 0.8rem;
    }
    @media (max-width: 992px) {
      font-size: 0.7rem;
    }
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
`
const LogoImage = styled.img`
    width: 150px;
    margin: 0.5rem 0;
`
const LogoText = styled.h4`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
  text-transform: capitalize;
`
function About() {
    return (
      <>
          <div>
            <AboutContainerWrapper className='d-flex justify-content-center'>
              <div>
                <LogoImage src={Logo}></LogoImage>
                <LogoText>For The Love Of Food</LogoText>
              </div>
           </AboutContainerWrapper>
            <div className='container px-5 py-5'>
              <div className='container px-5 py-5'>
              <SubheadingComponent1 text="The Heart of Our Fast-Food Experience"></SubheadingComponent1>
              <AboutTextWrapper>
                <AboutText>At our fast-food restaurant, quality isn't just a word; it's our commitment to every customer
                  who walks through our doors. We understand that in the realm of fast-food dining, the misconception about 
                  quality often prevails. However, we're here to challenge that notion.
                </AboutText>
                <AboutText>
                  Our dedication to serving top-tier quality food is unwavering.
                  We believe that fast doesn't equate to compromising on excellence. 
                  Each ingredient sourced, every meal prepared, and every dish served is a testament to our stringent standards.
                </AboutText>
                <AboutText>
                  From the freshest produce to the choicest meats, we meticulously select our ingredients to ensure that every 
                  bite bursts with flavor and satisfaction. Our commitment to quality transcends mere taste—it embodies our promise 
                  of safety, nutritional value, and an overall delightful dining experience.
                </AboutText>
              </AboutTextWrapper>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default About;
  