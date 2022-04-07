import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import PokemonList from '../components/pokemonList';






function PokemonPage () {

const [search, setSearch] = useState('')



const getSearch = () => {
  return search;
}

const handleSearchChange = event => {
  
  setSearch(event.target.value);
  console.log(getSearch() , "<--- current state");
  
}


useEffect(() => {

}, [])


  return (
    <div>

      
  
    <Layout pageTitle="Pokemon!">

    <h2>Who is that pokemon!</h2>
    <h4>Created using pokeAPI, and bootstrap </h4>
    
      
    </Layout>
    <div>
    <input type = "text" placeholder = "Search..." value={search}
        onChange={handleSearchChange}
        >
        </input>

    <PokemonList searchString = {search} onChange= {handleSearchChange}></PokemonList>
    </div>

   
    
    </div>
   
  )
}

export default PokemonPage