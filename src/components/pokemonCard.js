import React, { Component } from 'react'
import Rechartspie from '../components/rechartspie';

import styled from 'styled-components'
import axios from 'axios';




export default class PokemonCard extends Component {
state = {
  name: '',
  imageUrl: '',
  pokemonIndex: '',
  pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/5/',
  pokestats: null,
  HP: 0,
  ATTACK: 0,
  DEFENSE: 0,
  type: ''
  
};

async componentDidMount(){
  const name = this.props.name; 
  const url = this.props.url; 
  const PokeData = await axios.get(this.state.pokemonUrl);
  this.setState({ pokestats: PokeData.data['stats']});
  console.log(this.state.pokestats);

  PokeData.data.stats.map(stat => {
   switch (stat.stat.name){
     case 'hp':
      this.setState({ HP: stat['base_stat']});
      break;
      case 'attack':
      this.setState({ ATTACK: stat['base_stat']});
      break;
      case 'defense':
      this.setState({ DEFENSE: stat['base_stat']});
      break;
   }
 })

 console.log(this.state.HP, this.state.ATTACK, this.state.DEFENSE)

  
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
         
        {/* <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
          </div> */}
        

  
       </div>
       
      </div>
    )
  }
}
