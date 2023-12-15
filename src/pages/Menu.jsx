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

  
    return (
      <div className='container'>
          <MenuWrapper className='row'>
            <div className="col-lg-3 col-12">
              <MenuComponent></MenuComponent>
            </div>
            <div className='col-lg-9 col-12'>
              <CategoryCardWrapper className='d-flex flex-wrap'>
                
                {items.map((item) => (
                  <div className='col-xl-4 col-md-6 col-12'>
                  <ProductCardComponent
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    category={category}
                  />
                  </div>
                ))}
              </CategoryCardWrapper>
            </div>
          </MenuWrapper>
      </div>
    )
  }
  
  export default Menu;
  