import React from 'react';
import styled from 'styled-components';
import {CartItem} from './CartItem'


const CartContainer = styled.div`
  border: 1px solid;
  padding: 20px;
  margin: 10px;
  background-color: white;
  align-self: center;
  width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: #1C1F22;
  color: white;
`

const ContainerL = styled.div`
  display: grid;
  gap: 8px;
`;
 const ItemContainer = styled.div`
`

class ShoppCart extends React.Component {
    totalValue = () => {
      let totalValue = 0
      for(let product of this.props.myCart) {
      totalValue += (product.quantity * product.price)
      }
      return totalValue
    }
   
  
    render() {
      return <CartContainer>
        <h3>Carrinho:</h3>
        <ContainerL>
          {this.props.myCart.map((product) => {
            
      return <CartItem 
      ItemIn={product} 
      removeFromCart ={this.props.removeFromCart}
         />
          }
          )}
        </ContainerL>
        <p>Valor total: R${this.totalValue()},00</p> 
      </CartContainer>
    }
  }
 
 
 
 
 
 
  export default ShoppCart ;

  
