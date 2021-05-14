import React from 'react'
import styled from 'styled-components'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/ShoppCart/Cart'
import img from './astronauta.jpg'
import Filter from './components/Filters/Filter'



const AppContainer = styled.div`
  margin:0px;
  padding:0px;
  height: 100%;
  width: 100%;
`

const DisplayApp = styled.div`
  display: flex;
  flex-direction: column;
`

const Stock = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
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
    id: 1,
    name: "Uniforme Cyberpunk",
    price: 5600,
    image: "https://mega.ibxk.com.br/2015/03/13/13142708050663.jpg"
     },
  {
    id: 2,
    name: "Confort 101",
    price: 7000,
    image: "https://www.inovacaotecnologica.com.br/noticias/imagens/010130190521-roupa-espacial-para-marte-1.jpg"
    },
  {
    id: 3,
    name: "OITNB",
    price: 8300,
    image: "https://i.pinimg.com/736x/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg"
    },
  {
    id: 4,
    name: "Safety first",
    price: 9600,
    image: "https://w7.pngwing.com/pngs/205/871/png-transparent-person-wearing-astronaut-attire-astronaut-space-suit-extravehicular-activity-outer-space-health-astronaut-disease-space-weightlessness.png"
  }
]

class App extends React.Component {

  state = {
    filterMin: 0,
    filterMax: Infinity,
    order: "increasing",
    search: "",  
    cart :[
      {
        id: 1,
        name: "Uniforme Cyberpunk",
        price: 5600,
        image: "https://mega.ibxk.com.br/2015/03/13/13142708050663.jpg"
         }        
      ]
    }                       
                   
   //www.youtube.com/watch?v=FIiSRlyQf0c
  //https://vimeo.com/410838254/6ea0a53200
  //https://www.youtube.com/watch?v=liVSP7p47xI
  //stackoverflow.com/questions/63471379/got-a-parsing-error-while-assign-a-value-on-my-state
  
  addToCart = (product) => {
    const existProductIndex = this.state.cart.findIndex(p => p.id === product.id);
  
    if (existProductIndex > 0) {

        const cartProducts = this.state.cart.slice();

        const existProduct = cartProducts[existProductIndex];
       
        const updateQuantityProducts = {
        ...existProduct,
        quantity: existProduct.quantity + product.quantity

       };

       cartProducts[existProductIndex] = updateQuantityProducts;
       
       this.setState({
            cart: cartProducts
       });

      } else {
         this.setState({
         cart: [...this.state.cart, product]

         });
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
  onChangeFilterMin=(event)=>{
    this.setState({filterMin: event.target.value})
  }
  
  onChangeFilterMax=(event)=>{
    this.setState({filterMax: event.target.value})
  }

  onChangeFilterSearch=(event)=>{
    this.setState({search: event.target.value})
  }

  onChangeOrder=(event)=>{
    this.setState({order: event.target.value})
  }

  render() {
   const filter_ = this.state.products.filter((item) => {
      if (((item.price >= this.state.filterMin || this.state.filterMin === '') &&
        (item.price <= this.state.filterMax || this.state.filterMax === '') &&
        (item.name.toLowerCase().includes(this.state.search.toLowerCase()) || this.state.search === ''))) {
        return true
      } else {
        return false
      }
    })

    if (this.state.order === 'decreasing') {
      filter_.reverse()
    }

    const filterProducts = filter_.map((item) => {

      return (
        <Products
          image={item.image}
          name={item.name}
          price={item.price}
          addToCart={() => this.addToCart(item.id)} />
      )
    }) 
    return (
      <AppContainer>
        <DisplayApp>
          <NavBar>
            <Filter
            maxPrice={this.state.filterMax}
            minPrice={this.state.filterMin}
            findProduct={this.state.search}
            onChangeFilterMax={this.onChangeFilterMax}
            onChangeFilterMin={this.onChangeFilterMin}
            onChangeFilterSearch={this.onChangeFilterSearch}
            onChangeOrder={this.onChangeOrder}
            />
          </NavBar>
          <Stock>
            {filterProducts}
            </Stock>
        </DisplayApp>
        <Cart
          myCart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />

      </AppContainer>
    )
  }
}

export default App