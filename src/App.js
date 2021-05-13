import React from 'react'
import styled from 'styled-components'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/ShoppCart/Cart'
import img from './astronauta.jpg'




const AppContainer = styled.div`
  margin:0px;
  padding:0px;
  height: 100%;
  width: 100%;
`

const DisplayApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% repeat(3, 1fr);
`

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  width: 100%;
  height: 200px;
  color: white;
  text-shadow: 1px 5px 5px black;
`

const products = [
  {
    id: Math.random(),
    name: "Uniforme Cyberpunk",
    price: 8600,
    image: "https://mega.ibxk.com.br/2015/03/13/13142708050663.jpg",
    quantity: 0

  },
  {
    id: Math.random(),
    name: "Confort 101",
    price: 9000,
    image: "https://www.inovacaotecnologica.com.br/noticias/imagens/010130190521-roupa-espacial-para-marte-1.jpg",
    quantity: 0
  },
  {
    id: Math.random(),
    name: "OITNB",
    price: 7300,
    image: "https://i.pinimg.com/736x/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg",
    quantity: 2
  },
  {
    id: Math.random(),
    name: "Safety first",
    price: 5600,
    image: "https://w7.pngwing.com/pngs/205/871/png-transparent-person-wearing-astronaut-attire-astronaut-space-suit-extravehicular-activity-outer-space-health-astronaut-disease-space-weightlessness.png",
    quantity: 1
  }
]

class App extends React.Component {
  state = {
    myCart: [],
    lowerFilter: 0,
    higherFilter: Infinity,
    order: "Nehnuma",
    search: ""
  }
  //www.youtube.com/watch?v=FIiSRlyQf0c
  //https://vimeo.com/410838254/6ea0a53200
  //https://www.youtube.com/watch?v=liVSP7p47xI
  //stackoverflow.com/questions/63471379/got-a-parsing-error-while-assign-a-value-on-my-state
  addToCart = (idProduct) => {
    const cart = this.state.myCart.findIndex(
      product => idProduct === product.id
    );
    if (cart >= 0) {
      const newInCart = this.state.product.filter((product) => {
        if (product.id === idProduct) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
     // this.setState({ myCart: newInCart }); // update o cart com o que foi add. no addToCart
    //}else{
  
      //this.setState({myCart: newInCart)
    } 
  }

  removeFromCart = (idProduct) => {
    const addToCart = this.state.products.filter((product) => {
      if (product.id === idProduct) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    })
    //this.setState({ tarefas: novaListaTarefas });
  }
  render() {
    return (
      <AppContainer>
        <DisplayApp>
          <NavBar>
            <h1>Nav</h1>
          </NavBar>
          <Products
            products={products}
            myCart={this.myCart}
          />
        </DisplayApp>
        <Cart
          myCart={this.state.myCart}
          removeFromCart={this.removeFromCart}
        />

      </AppContainer>
    )

  }
}

export default App