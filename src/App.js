import React from 'react'
import styled from 'styled-components'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/ShoppCart/Cart'
import img from './astronauta2.jpg'
import Filter from './components/Filters/Filter'
import model1 from './imgs/pngwing.com.png'

const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin:0px;
  padding:0px;
  background-color: #1C1F22;
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
  align-items: center;
  justify-content:center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  color: white;
  text-shadow: 1px 5px 5px black;
`
const FilterBar = styled.div`
  display:flex;
  background-color: #133440;
  flex-wrap: wrap;
  padding-bottom:10px;
`
const Header = styled.div`
  display:flex;
  flex-direction: column;
  text-align:center;
`

const NameStore = styled.h1`
  margin: 5px;
  font-size: 13rem;
  font-weight: 200;
  font-family: 'Exo 2', sans-serif;
  font-style: italic;
  color: #fff;
  padding: 2rem 2rem 2rem;
  border: 0.4rem solid #fff;
  border-radius: 2rem;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
  font-size: 90px;   
  --neon-text-color: #f40;
  --neon-border-color: #08f;

@keyframes flicker {
    
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
        
        box-shadow:
            0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem var(--neon-border-color),
            inset 0 0 2rem var(--neon-border-color),
            0 0 4rem var(--neon-border-color),
            inset 0 0 4rem var(--neon-border-color);        
    }
    
    20%, 24%, 55%{        
        text-shadow: none;
        box-shadow: none;
    }    
}
    @media (max-width: 761px){
      font-size: 4rem;
      padding: 2rem 2rem 2rem;
    }
    @media (max-width: 375px){
      font-size: 3rem;
      padding: 1rem 1rem 1rem;
    }

`

const TextHeader = styled.p`
  font-size: 20px;
  color: black;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
`


class App extends React.Component {
  state = {
    products :[
      {
        id: Math.random(),
        name: "Uniforme Cyberpunk",
        price: 5600,
        image: "https://mega.ibxk.com.br/2015/03/13/13142708050663.jpg",
    
      },
      {
        id: Math.random(),
        name: "Confort 101",
        price: 9000,
        image: "https://www.inovacaotecnologica.com.br/noticias/imagens/010130190521-roupa-espacial-para-marte-1.jpg",
      },
      {
        id: Math.random(),
        name: "OITNB",
        price: 8300,
        image: "https://i.pinimg.com/736x/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg",
      },
      {
        id: Math.random(),
        name: "Safety first",
        price: 9600,
        image: model1,
      },
      {
        id: Math.random(),
        name: "Modern solutions",
        price: 6600,
        image: "https://static.turbosquid.com/Preview/2019/12/04__08_39_19/Futuristic_Astronaut_Space_Suit_Rigged_c4d_00.jpg866C93BC-BAAB-4227-B53C-D011D182B44ALarge.jpg",
      },
      {
        id: Math.random(),
        name: "Vintage",
        price: 4800,
        image: "https://i.pinimg.com/originals/cc/05/c2/cc05c2207f91fd59c585f5389895bdad.jpg",
      },
      {
        id: Math.random(),
        name: "Jet-Pack",
        price: 4800,
        image: "https://www.renderhub.com/zolty/space-suit-3d/space-suit-3d-01.jpg",
      },
      {
        id: Math.random(),
        name: "Starter Pack",
        price: 5666,
        image: "https://static.turbosquid.com/Preview/000952/135/LE/3d-nasa-space-suit-extravehicular-model_600.jpg",
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
      if(this.state.filterMin === ""){
        this.setState({filterMin: 0})
      }else if(this.state.filterMax === ""){
        this.setState({filterMax: Infinity})
      }
      return item.price >= this.state.filterMin && item.price <= this.state.filterMax && item.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
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
            <Header>
              <NameStore>Novo normal</NameStore>
              <TextHeader>Para ir ao espaço ou ao mercado durante a pandemia</TextHeader>
            </Header>
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
