import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    const pokeItems = async (id) => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemons(result)
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
          </div>
        
      </div>
    </div>
  )
}


export default App;
