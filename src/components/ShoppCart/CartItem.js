import React from 'react';
import styled from 'styled-components';

const ContainerItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: left;
`
  export class CartItem extends React.Component {
    render() {
      return <ContainerItems>
        <p>{this.props.ItemIn.quantity}</p>
        <p>{this.props.ItemIn.name}</p>
        <button 
          onClick={() => this.props.removeFromCart(this.props.ItemIn.id)}>
          -Remover Itens
        </button>
      </ContainerItems>
    }
  }
  
