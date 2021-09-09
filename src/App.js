import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from './components/Pokemon';


function App() {
 const [pokemons, setPokemons] = useState([])
   const pokeItems = async () => {
     const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
     setPokemons(result.data.results)
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
      {pokemons.map((poke) => {
        return (
          <Pokemon key={poke.name} pokemonUrl={poke.url} />
        )
      })}
     </div>
    </div>
  )
}


export default App;
