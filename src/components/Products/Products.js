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
  border: 1px solid white;
  border-radius: 10px;
  margin: 40px;
  flex-wrap: wrap;
  background-color: #1C1F22;
  color: white;
  padding: 10px;
  &:hover{
        transform:scale(1.05);
        -webkit-box-shadow: 0px 10px 13px -7px #08f, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #08f, 5px 5px 15px 5px rgba(0,0,0,0);
    }
`

const ImageStock = styled.img`
  border-radius: 10px;
  width: 200px;
  height:320px;
`

const ButtonAdd = styled.button `
  width: 100%;
  height: 6vh;
  color: #ffffff;
  background-color: #8f8f8f;
  box-shadow: none;
  border-style: none;
  border-radius: 10px;
    :hover {
    background: #08f;
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