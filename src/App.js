import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const pokeItems = async () => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      setPokemon(result) 
    }
    pokeItems()
  }, [])

  return (
    <div className="container">
      <div className="name">
        <h2>Pokemon API</h2>
        <input type="text" placeholder="Digite o nome do Pokemon" autoFocus="On"/>
        <button>Procurar</button>
      </div>
      <div className="pokemons">
        {setPokemon.map((item) => {
          const { name, img, attack, defense} = item
          return (
            <div className="item">
              <div className="image">
                <img src={img} alt={name} />
              </div>
            </div>
          )
        })}
      </div>
        </div>
  );
      }
export default App;
