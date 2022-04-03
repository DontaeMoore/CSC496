import React, { Component } from 'react'

import styled from 'styled-components'

export default class PokemonCard extends Component {
state = {
  name: '',
  imageUrl: '',
  pokemonIndex: ''
};

componentDidMount(){
  const name = this.props.name; 
  const url = this.props.url; 

  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

  this.setState({
    name: name,
    imageUrl: imageUrl,
    pokemonIndex: pokemonIndex
   })
}





  render() {
   

    return (
      <div className = 'col-md-3 col-sm-6 mb-5'>
       <div className="card ">
         
         <div className="card-header">
         <div className="card-img-top rounded mx-auto mt=2">
         {this.state.pokemonIndex}:
         </div>
           <h3>{this.state.name}</h3>
           <img src = {this.state.imageUrl}></img>
           
         </div>
         
         
       </div>
  
      </div>
    )
  }
}
