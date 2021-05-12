import React from 'react';
import styled from 'styled-components';

  export class CartItem extends React.Component {
    render() {
      return <ItemContainer>
        <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p>
        <button 
          onClick={() => this.props.removeFromCart(this.props.cartItem.id)}>
          Remover Itens
        </button>
      </ItemContainer>
    }
  }
  export default CartItem;
