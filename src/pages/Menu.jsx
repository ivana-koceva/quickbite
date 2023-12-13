import React from 'react';
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';

  const MenuWrapper = styled.div`
  width: 80%
  margin: 0 auto;
  display: flex;
  justify-content: center;
` 

function Menu() {
    return (
      <>
          <MenuWrapper>
            <MenuComponent></MenuComponent>
            <div>
              <CategoryCardComponent></CategoryCardComponent>
            </div>
          </MenuWrapper>
      </>
    )
  }
  
  export default Menu;
  