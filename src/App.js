import { useEffect, useState } from 'react';
// import Pokemon from './components/pokemon.js'
import './App.css';
import axios from 'axios'
import Pokemon from './components/pokemon';

function App() {
  const [pokemons, setPokemons] = useState([])

  const pokeItems = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    setPokemons(result.data.results)
    console.log(result)
  }

  useEffect(() => {
    pokeItems()
  }, [])



  return (
    <div className="container">
      <div className="name">
        <h2>Pokemon API</h2>
      </div>
      <div className="pokemons">
        <div className="pokemons">

          {pokemons.map((poke) => {
            return (
              <div key={poke.name} className="pokename">
                <h4>{poke.name}</h4>                
                <Pokemon pokemonUrl={poke.url} />
              </div>
            )
          })}
        </div>


      </div>
    </div>
  )
}


export default App;
