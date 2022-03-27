import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import axios from 'axios'

function PokemonPage () {
const [pokemon, setPokemon] = useState({});
const [pokemon2, setPokemon2] = useState({});
const [pokemon3, setPokemon3] = useState({});

useEffect(() => {
  encounter()
  encounter2()
  encounter3()

}, [])

const encounter = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/151')
    .then(response => {
    console.log(response.data);
    setPokemon(response.data);
  })
}

const encounter2 = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
    console.log(response.data);
    setPokemon2(response.data);
  })
}

const encounter3 = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/5')
    .then(response => {
    console.log(response.data);
    setPokemon3(response.data);
  })
}

  return (
    <div>
    <Layout pageTitle="Pokemon!">

    <h2>Who is that pokemon!</h2>
    <h4>Created using pokeAPI</h4>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151" + ".png"} className="sprite" />
      <h3 className="pokemon-name">{pokemon.name}</h3>
  
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1" + ".png"} className="sprite" />
      <h3 className="pokemon-name">{pokemon2.name}</h3>

      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5" + ".png"} className="sprite" />
      <h3 className="pokemon-name">{pokemon3.name}</h3>
      
    </Layout>

      
    </div>
   
  )
}

export default PokemonPage