import React from 'react';
import styled from 'styled-components';

const NavFilter = styled.div`
    display:flex;
    justify-content: space-around;
`
const NavPrice = styled.div`
    display:flex;
`


export default class Filter extends React.Component{
    render(){
        return(
        <NavFilter>
            <NavPrice>
                <input type="number" placeholder="Preço Min" onChange={this.props.onChangeFilterMin}/>
                <input type="number" placeholder="Preço Max" onChange={this.props.onChangeFilterMax}/>
            </NavPrice>
            <div>
                <input type="text" placeholder="Produto" onChange={this.props.onChangeFilterSearch}/>
                <select defaultValue="decreasing" onChange={this.props.onChangeOrder}>
                    <option value="decreasing">Decrescente</option>
                    <option value="increasing">Crescente</option>
                </select>
            </div>
        </NavFilter>
        )
    }
}