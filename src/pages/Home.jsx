import HeadingComponent  from '../components/HeadingComponent'
import ParagraphComponent from '../components/ParagraphComponent'
import PrimaryButtonComponent  from '../components/PrimaryButton'
import SecondaryButtonComponent  from '../components/SecondaryButton'
import CategoryCardComponent  from '../components/CategoryCardComponent'
import styled from 'styled-components';
import Rewards from '../images/rewardsb&w.png'
import Burger from '../images/cheeseburger.png'
import Fries from '../images/fries.png'
import Wrap from '../images/wrap.png'
import Salad from '../images/salad.png'
import Sweets from '../images/sundae.png'
import Drinks from '../images/coffee.png'
import OfferCardComponent from '../components/OfferCardComponent'
import Offer1 from '../images/offers_1.png'
import Offer2 from '../images/offers_2.png'
import Offer3 from '../images/offers_3.png'
import BannerLaptop from '../images/bannerlaptop.png'
import BannerTablet from '../images/bannertablet.png'
import BannerPhone from '../images/bannerphone.png'

const CategoryCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const OffersContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 2rem auto;
  padding: 3rem 0;
`
const NewsContainerWrapper = styled.div`
  background-image: url(${Rewards});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 1rem;
`
const NewsTextContainer = styled.div`
  text-align: left;
  padding: 4rem;
`
const ButtonsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
`
const BannerImageWrapper = styled.div`
  background: url(${BannerLaptop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    background: url(${BannerTablet});
    background-size: cover;
    background-position: unset;
    background-repeat: no-repeat;
  }

  @media (max-width: 576px) {
    background: url(${BannerPhone});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  margin-bottom: 5rem;
`
const BannerImage = styled.div`
  margin: 0 2.5rem;
  @media (max-width: 992px) {
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`
const CTAContainer = styled.div`
  padding: 3rem 1rem;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 576px) {
    margin-bottom: 15rem;
  }
`;
function Home() {
  return (
    <> <BannerImageWrapper className='container-fluid'>
        <BannerImage className='row'>
          <CTAContainer className='col-lg-6 col-md-7 col-sm-7'>
            <HeadingComponent text="Indulge in the ultimate fast food experience!"></HeadingComponent>
            <ParagraphComponent text="From irresistible burgers to crispy, flavorful fries, every bite is a taste of perfection. 
            Join us and discover why we're your top choice for unbeatable fast food satisfaction!"></ParagraphComponent> 
            <ButtonsContainerWrapper>
              <PrimaryButtonComponent text="Order now"></PrimaryButtonComponent>
              <SecondaryButtonComponent text="Order delivery"></SecondaryButtonComponent>
            </ButtonsContainerWrapper>
          </CTAContainer>
          <div className='col-lg-6 col-md-5 col-sm-4'></div>
        </BannerImage>
      </BannerImageWrapper>

      <CategoryCardsWrapper>
        <CategoryCardComponent text="Burgers" image={Burger}></CategoryCardComponent>
        <CategoryCardComponent text="Fries" image={Fries}></CategoryCardComponent>
        <CategoryCardComponent text="Wraps" image={Wrap}></CategoryCardComponent>
        <CategoryCardComponent text="Salads" image={Salad}></CategoryCardComponent>
        <CategoryCardComponent text="Sweets" image={Sweets}></CategoryCardComponent>
        <CategoryCardComponent text="Drinks" image={Drinks}></CategoryCardComponent>
      </CategoryCardsWrapper>

      <OffersContainerWrapper>
        <OfferCardComponent title="Buy One Get One Free Tuesday" text="Savor the deliciousness of two burgers for the price of one 
        and treat yourself to a flavorful meal deal. Now available every Tuesday from 10am to 4pm!" image={Offer1}></OfferCardComponent>
        <OfferCardComponent title="Exclusive PB&J Discounts" text="Enjoy special discounts on our delectable sandwiches!
        Treat yourself to the nostalgic flavors of peanut butter and jelly at a fraction of the cost." image={Offer2}></OfferCardComponent>
        <OfferCardComponent title="Wrap It Up: Christmas Offer" text="Unwrap delicious savings with our latest offer on a variety of wraps! 
        Dive into a world of savory flavors and fresh ingredients throughout the holidays!" image={Offer3}></OfferCardComponent>
      </OffersContainerWrapper>
       
      <NewsContainerWrapper>
        <NewsTextContainer>
          <HeadingComponent text="Enjoy our rewards program!"></HeadingComponent>
          <ParagraphComponent text="Earn points with every purchase, unlocking delicious perks and exclusive discounts. 
          Whether you're a fan of our crispy fries, juicy burgers, or refreshing drinks, your loyalty deserves to be rewarded. 
          Sign up today and savor the taste of savings with every visit!"></ParagraphComponent> 
          <PrimaryButtonComponent text="Sign up"></PrimaryButtonComponent>
        </NewsTextContainer>
      </NewsContainerWrapper>
    </>
  )
}

export default Home;
