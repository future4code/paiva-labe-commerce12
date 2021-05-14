import React from 'react';
import styled from 'styled-components';

const ProductDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`
const BlockStock = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 40px;
  flex-wrap: wrap;
  background-color: white;
  padding: 10px;
`

const ImageStock = styled.img`
  border-radius: 10px;
  width: 200px;
  height:320px;
`

const ButtonAdd = styled.button `
  width:100%;
  height: 6vh;
  color: #ffffff;
  background-color: #8f8f8f;
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
        <ButtonAdd onClick={() => props.addToCart(props.id)}>Adicionar</ButtonAdd>
      </BlockStock>
    )
  }
export default Products;