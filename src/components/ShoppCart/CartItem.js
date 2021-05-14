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
  
