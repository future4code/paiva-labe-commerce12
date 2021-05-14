import React from 'react'
import styled from 'styled-components'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/ShoppCart/Cart'
import img from './astronauta2.jpg'
import Filter from './components/Filters/Filter'

const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin:0px;
  padding:0px;
  background-color: #e9e9e9;
`
const DisplayApp = styled.div`
  display: flex;
  flex-direction: column;
`

const Stock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap: wrap;
`

const NavBar = styled.div`
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  color: white;
  text-shadow: 1px 5px 5px black;
  @media (max-width: 665px){
        display:none;
    }
`
const FilterBar = styled.div`
  display:flex;
  background-color: #133440;
  flex-wrap: wrap;
  padding-bottom:10px;
`

class App extends React.Component {
  state = {
    products :[
      {
        id: Math.random(),
        name: "Uniforme Cyberpunk",
        price: 5600,
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
        price: 8300,
        image: "https://i.pinimg.com/736x/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg",
        quantity: 2
      },
      {
        id: Math.random(),
        name: "Safety first",
        price: 9600,
        image: "https://w7.pngwing.com/pngs/205/871/png-transparent-person-wearing-astronaut-attire-astronaut-space-suit-extravehicular-activity-outer-space-health-astronaut-disease-space-weightlessness.png",
        quantity: 1
      }
    ],

    myCart: [],
    filterMin: 0,
    filterMax: Infinity,
    order: "increasing",
    search: ""
  }

  addToCart = (idProduct) => {
    const addToCart = [...this.state.myCart]
    let i
    for(i =0; i <addToCart.length; i++){
      if(addToCart[i].id === idProduct){
        addToCart[i].quantity += 1
        break
      }
    }
    if (i === addToCart.length){
      const productFilter = this.state.products.filter((item) =>{
        if (item.id === idProduct)
        return true
      })
      productFilter[0].quantity = 1
      addToCart.push(productFilter[0])
    }
    this.setState({myCart: addToCart})
  }

  removeFromCart = (idProduct) => {
    const removeCart = [...this.state.myCart]
    const productId = removeCart.findIndex((item)=>{
      return item.id === idProduct
    })
    for(let i = 0; i< removeCart.length; i++){
      if(i === productId){
        if(removeCart[i].quantity > 1){
          removeCart[i].quantity -= 1
        }else{
          removeCart.splice(productId, 1)
        }
      }
    }
    this.setState ({myCart: removeCart})
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

  resetFilters=(event)=>{
    this.setState({
      search: "",
      filterMin: 0,
      filterMax: Infinity,
    })

  }

  render() {

    const filter = this.state.products.filter(item =>{
      return item.price >= this.state.filterMin && item.price <= this.state.filterMax && item.name.includes(this.state.search)
    }).sort((a,b) =>{
      if(this.state.order === "increasing"){
        return a.price - b.price
      }else if (this.state.order === "decreasing"){
        return b.price - a.price
      }
    })

    const filterProducts = filter.map((item)=>{
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
          </NavBar>
          <FilterBar>
              <Filter
              maxPrice={this.state.filterMax}
              minPrice={this.state.filterMin}
              findProduct={this.state.search}
              onChangeFilterMax={this.onChangeFilterMax}
              onChangeFilterMin={this.onChangeFilterMin}
              onChangeFilterSearch={this.onChangeFilterSearch}
              onChangeOrder={this.onChangeOrder}
              resetFilters={this.resetFilters}
              />
            </FilterBar>
          <Stock>
            {filterProducts}
          </Stock>
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
