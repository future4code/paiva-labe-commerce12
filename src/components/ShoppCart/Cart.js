import React from 'react';
import styled from 'styled-components';
import {CartItem} from './CartItem'


const CartContainer = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  
`

const ContainerL = styled.div`
  display: grid;
  gap: 8px;
`;
 const ItemContainer = styled.div`
`

class ShoppCart extends React.Component {
  totalValue = () => {
    let totalValue = 0 //O valor deve ser 0 no campo do valor total
    // for(let x of this.props.y) { soma += (a*b) } //https://pt.stackoverflow.com/questions/90841/somar-array-javascript/90842#90842
    for(let product of this.props.cart) {
    totalValue += product.quantity * product.price
    }
    return totalValue
  }
   
  render() {
    return <CartContainer>
      <h3>Carrinho:</h3>
      <ContainerL>
        {this.props.cart.map((product) => { // vai mapear uma const que se encontra em home??
          
    return <CartItem 
    CartItem={product} 
    removeFromCart ={this.props.removeFromCart}// recebe a funcao de App.js 
       />
        }
        )}
      </ContainerL>
      <p>Valor total: R${this.totalValue()},00</p> 
    </CartContainer>
    //O this.totalvalue chama a funcao que soma e multipica os valores dos produtos  
  }
}






export default ShoppCart ;
