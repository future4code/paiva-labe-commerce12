import React from 'react';
import styled from 'styled-components';
import {CartItem} from './CartItem'


const CartContainer = styled.div`
  border: 1px solid;
  
`;

const ListContainer = styled.div`
  display: grid;
  gap: 8px;
`
const ItemContainer = styled.div`
`

export class ShoppCart extends React.Component {
    TotalValue = () => {
      let totalValue = 0 //O valor deve ser 0 no campo do valor total
  
      
      }
  
    
    }
  
    render() {
      return <CartContainer>
        <h3>Carrinho:</h3>
        <ListContainer>
          {this.props.myCart.map((product) => { // vai mapear uma const que se encontra em home??
            return <CartItem 
                      cartItem={} 
                      removeFromCart ={this.props.removeFromCart}// recebe a funcao de App.js 
                    />
          })}
        </ListContainer>
        <p>Valor total: R${this.TotalValue()},00</p> 
      </CartContainer>
      //O this.totalvalue chama a funcao que soma e multipica os valores dos produtos  
    }
  }
  
  export default Cart;
