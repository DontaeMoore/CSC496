import React, { Component } from 'react'
import PokemonCard from './pokemonCard'
import axios from 'axios';


export default class PokemonList extends Component  {
  
state= {
  url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
  pokemon: null,
  searchString: ''
};

async componentDidMount(){
const res = await axios.get(this.state.url);
console.log("Load pokemon into pokemon:")
this.setState({ pokemon: res.data['results']});
}



  render() {
    return (
      <div>
        {console.log("state in pokemonList", this.props.searchString)}
      {this.state.pokemon ? (
      <div className = "row">
      {this.state.pokemon.map(pokemon =>  pokemon.name.includes(this.props.searchString) && (
     <PokemonCard
     key = {pokemon.name}
     name = {pokemon.name}
     url = {pokemon.url}
     
     />
      ))}
      </div>
      ) : (<h1>Loading {console.log("not finished loading pokemon")}</h1>
      
      )
      }
      </div>

    );
    
  }
}
