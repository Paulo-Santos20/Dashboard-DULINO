import React from 'react'
import { Container } from './styles'
import styled from 'styled-components';


const SidebarItem = ({ Icon, Text, selected }) => {
  return (
    <SidebarItemContainer selected={selected}>
      <Icon />
      <span>{Text}</span>
    </SidebarItemContainer>
  );
};
const SidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${props => props.selected ? 'white' : 'black'};
  background-color: ${props => props.selected ? '#2E7CD1' : 'transparent'};
  border-radius: 5px;
  transition: background-color 0.3s ease;   
  font-size: 20px;  
   cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;


  &:hover {
    background-color: ${props => props.selected ? '#2E7CD1' : '#f0f0f0'};
  }

  svg {
    margin-right: 10px;
  }
`;

export default SidebarItem