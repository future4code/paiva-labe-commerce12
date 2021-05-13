import React from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard'

const ProductDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`

class Products extends React.Component {

    render() {
        const productList = this.props.products
        return(<ProductDisplay>
            {productList.map((product) => {
                return <ProductCard
                  product={product}
                  addToCart={this.props.addToCart}
                />
            })}
            </ProductDisplay>
            )}
}

export default Products;