import React from 'react';
import styled from 'styled-components';

const ContainerItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }
`
const ButtonRemove = styled.button `
  /* width: 100%; */
  height: 6vh;
  color: #ffffff;
  background-color: #8f8f8f;
  box-shadow: none;
  border-style: none;
  border-radius: 10px;
    :hover {
      background: #08f;
      transform:scale(1.05);
    } 
`

  export class CartItem extends React.Component {
    render() {
      return <ContainerItems>
        <p>{this.props.ItemIn.quantity}</p>
        <p>{this.props.ItemIn.name}</p>
        <ButtonRemove 
          onClick={() => this.props.removeFromCart(this.props.ItemIn.id)}>
          Remover Itens
        </ButtonRemove>
      </ContainerItems>
    }
  }
  
