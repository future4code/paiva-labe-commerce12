import React from 'react'
import styled from 'styled-components';

export class ProductCard extends React.Component {
    render() {
      const product = this.props.product
      console.log(product)
      return(
        <div>
          <img src={product.imagem}/>
          <div>
            <p>{product.nome}</p>
            <p>R${product.preço},00</p>
            <butt onClick={() =>this.props.addToCart}>Adicionar</butt>
          </div>
        </div>
      )
    }
  }
