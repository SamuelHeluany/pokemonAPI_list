import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from './components/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(12)

  const pokeItems = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=`+limit)
    setPokemons
      (result.data.results)
  }

  const loadMore = () => {
    setLimit(limit+12)
  }

  useEffect(() => {
    pokeItems()
  }, [limit])

  return (
    <div className="container">
      <div className="name">
        <h2>Pokemon API</h2>
      </div>
      <div className="pokemons">
        {pokemons.map((poke) => {
          return (
            <Pokemon key={poke.name} pokemonUrl={poke.url} />
          )
        })}
      </div>
      <div className="buttonLoad">
        <button onClick={loadMore}>Load More Pokemons</button>
      </div>
    </div>
  )
}

export default App;
