import React from 'react';
import styled from 'styled-components';

const NavFilter = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;

    @media (max-width: 665px){
        flex-direction: column;
    }

`
const NavPrice = styled.div`
    display:flex;
    justify-content:center;
`
const InputDisplay = styled.input`
    display:flex;
`
const SelectDisplay = styled.select`
    display: flex;
`
const SelectSection = styled.div`
    display: flex;
    flex-direction: column;
`

const LabelText = styled.label`
    color:white;
    text-align: center;
`
const ButtonClear = styled.button `
  width:60px;
  height: 40px;
  color: #ffffff;
  background-color: #8f8f8f;
  box-shadow: none;
  border-color: white;
  border-radius: 10px;
  margin:30px;
      :hover {
    background: #061014;
    } 
`

export default class Filter extends React.Component{
    render(){
        return(
        <NavFilter>
            <NavPrice>
                <InputDisplay type="Number" min="0" placeholder="Preço Min" onChange={this.props.onChangeFilterMin}/>
                <InputDisplay type="Number" min="0" placeholder="Preço Max" onChange={this.props.onChangeFilterMax}/>
            </NavPrice>
            <InputDisplay type="text" placeholder="Produto" onChange={this.props.onChangeFilterSearch}/>
            <SelectSection>
                <LabelText>Ordem de exibição</LabelText>
                <SelectDisplay defaultValue="increasing" onChange={this.props.onChangeOrder}>
                    <option value="increasing">Crescente</option>
                    <option value="decreasing">Decrescente</option>
                </SelectDisplay>
            </SelectSection>
            <div>
                <ButtonClear onClick={this.props.resetFilters}>Limpar<br/>Filtros</ButtonClear>
            </div>
        </NavFilter>
        )
    }
}