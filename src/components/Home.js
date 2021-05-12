import React from 'react';
import styled from 'styled-components'
import { Product } from './Product';



class Home extends React.Component {

    render() {
        const productList = this.props.products
        return(<div>
            {productList.map((product) => {
                return <Product
                  product={product}
                  onAddProductToCart={this.props.onAddProductToCart}
                />
              })}
            </div>
        )

    }
}

export default Home