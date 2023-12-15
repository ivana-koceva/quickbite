import React from 'react';
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent';
import { useLocation } from 'react-router-dom';
import ProductCardComponent from '../components/ProductCardComponent';
import { burgers, drinks, fries, salads, sweets, wraps } from '../helpers/lists';

const MenuWrapper = styled.div`
  margin: 5rem 0;
` 
const CategoryCardWrapper = styled.div`
  margin: 1rem 0;
`
function Menu() {
  const location = useLocation();
  const currentURL = location.pathname.split("/");
  const category = currentURL[currentURL.length - 1];
  

  const getCategoryItems = (category) => {
    switch (category) {
      case 'burgers':
        return burgers;
      case 'drinks':
        return drinks;
      case 'fries':
        return fries;
      case 'salads':
        return salads;
      case 'sweets':
        return sweets;
      case 'wraps':
        return wraps;
      default:
        return [];
    }
  };

  const items = getCategoryItems(category);
  
  const productCards = items.map((item) => (
    <ProductCardComponent
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      category={category}
    />
  ));

  console.log('Current URL:', productCards);
    return (
      <div className='container px-5'>
          <MenuWrapper>
              <MenuComponent></MenuComponent>
              <CategoryCardWrapper>
                {productCards}
              </CategoryCardWrapper>
          </MenuWrapper>
      </div>
    )
  }
  
  export default Menu;
  