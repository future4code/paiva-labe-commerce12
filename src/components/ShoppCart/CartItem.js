import React from 'react';
import styled from 'styled-components';

const ContainerItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`

class CartItem extends React.Component {
  render() {
    return <ContainerItems>
      <p>{this.props.CartItem.quantity}</p>
      <p>{this.props.CartItem.name}</p>
      <button 
        onClick={() => this.props.removeFromCart(this.props.CartItem.id)}>
        -Remover Itens
      </button>
    </ContainerItems>
  }
}

export default CartItem  
