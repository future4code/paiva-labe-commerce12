import React from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard'

const ProductDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`
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

function Products(props) {

     return(
      <BlockStock>
        <ImageStock src={props.image}/>
        <ProductText>
          <ProductName>{props.name}</ProductName>
          <ProductPrice>R${props.price},00</ProductPrice>
        </ProductText>
        <ButtonAdd onClick={() =>this.props.addToCart(props.id)}>Adicionar</ButtonAdd>
      </BlockStock>
    )
  }
export default Products;