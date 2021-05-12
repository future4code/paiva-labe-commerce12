import React from 'react'
import styled from 'styled-components'
import './App.css'
import Home from "./components/Home"

const products = [
  {
    id: Math.random(),
    nome: "Uniforme Cyberpunk",
    preço: 8600,
    imagem: "https://mega.ibxk.com.br/2015/03/13/13142708050663.jpg"
    
  },
  {
    id: Math.random(),
    nome: "Confort 101",
    preço: 9000,
    imagem: "https://www.inovacaotecnologica.com.br/noticias/imagens/010130190521-roupa-espacial-para-marte-1.jpg"
  },
  {
    id: Math.random(),
    nome: "OITNB",
    preço: 7300,
    imagem: "https://i.pinimg.com/736x/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg"
  },
  {
    id: Math.random(),
    nome: "Safety first",
    preço: 5600,
    imagem: "https://w7.pngwing.com/pngs/205/871/png-transparent-person-wearing-astronaut-attire-astronaut-space-suit-extravehicular-activity-outer-space-health-astronaut-disease-space-weightlessness.png"
  }     
]

class App extends React.Component {
    state = {
      myCart:[],
      lowerFilter: 0,
      higherFilter: Infinity,
      order: "Nehnuma",
      search: ""
    }

    addToCart = (idProduct)=>{
      const addToCart = this.state.products.filter((product)=>{
        return product.id === idProduct;
      })
      const cart = [...this.state.myCart, addToCart]
      this.setState({myCart: cart})
    }

    removeFromCart = (idProduct)=>{
      const removeCart = this.state.products.filter((product)=>{
        return product.id !== idProduct
      })
      this.setState({myCart: removeCart})
    }
    render() {  
      return(
        <div>
          <Home
          products={products}
          addToCart={this.addToCart}
          />
        </div>
      )
      
  }
}

export default App