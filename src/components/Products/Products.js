import React from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard'


class Products extends React.Component {

    render() {
        const productList = this.props.products
        return(<div>
            {productList.map((product) => {
                return <ProductCard
                  product={product}
                  onAddProductToCart={this.props.onAddProductToCart}
                />
              })}
            </div>
        )

    }
}

export default Products;