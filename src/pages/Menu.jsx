import React from 'react';
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';

const MenuWrapper = styled.div`
  width: 80%
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 5rem 0;
` 
const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
function Menu() {
    return (
      <>
          <MenuWrapper>
            <MenuComponent></MenuComponent>
            <CategoryCardWrapper>
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
            </CategoryCardWrapper>
            <CategoryCardWrapper>
              <CategoryCardComponent></CategoryCardComponent>
              <CategoryCardComponent></CategoryCardComponent>
            </CategoryCardWrapper>
          </MenuWrapper>
      </>
    )
  }
  
  export default Menu;
  