import * as React from 'react'
import Layout from '../components/layout'

const PokemonPage = () => {
    
const api = "https://pokeapi.co/api/v2/pokemon"

  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this pokemon experience.</p>
    </Layout>
  )
}

export default PokemonPage