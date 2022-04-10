import React, { Component } from 'react'
import Rechartspie from '../components/rechartspie';

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
           <div class="container">
          <div class="row ">
          <div class="col-md-6"><img src = {this.state.imageUrl}></img></div>
          <div class="col-md-6"><span class="pull-right mx-auto"><Rechartspie></Rechartspie></span></div>
          </div>
          </div>
           
           
         </div>
         <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
          </div>
        

  
       </div>
       
      </div>
    )
  }
}
