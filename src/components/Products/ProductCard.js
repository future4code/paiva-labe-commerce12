import React from 'react'
import styled from 'styled-components';

const BlockStock = styled.div `
  border: 1px solid black;
  border-radius: 10px;
  margin: 40px;
  padding: 20px;
`

const ImageStock = styled.img`
  border-radius: 10px;
  min-width: 120px;
  max-width: 120px;
  min-height: 200px;
  max-height: 200px;
`

const ButtonAdd = styled.button `
  width:100%;
  height: 6vh;
  color: #dfe6e9;
  background-color: #2d3436;
  box-shadow: none;
  border-style: none;
  border-radius: 10px;
    :hover {
    background: #133440;
    } 
`
const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const ProductName = styled.p`

`
const ProductPrice = styled.p`

`

export class ProductCard extends React.Component {
    render() {
      const product = this.props.product
      return(
        <BlockStock>
          <ImageStock src={product.image}/>
          <ProductText>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>R${product.price},00</ProductPrice>
          </ProductText>
          <ButtonAdd onClick={() =>this.props.addToCart(product.id)}>Adicionar</ButtonAdd>
        </BlockStock>
      )
    }
  }
