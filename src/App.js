import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    const pokeItems = async (id) => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      setPokemons(result.data.results)
      console.log(result)
    }
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
              <div className="pokename">
                <h4>{poke.name}</h4>
              </div>
            )
          })}
        </div>


      </div>
    </div>
  )
}


export default App;
