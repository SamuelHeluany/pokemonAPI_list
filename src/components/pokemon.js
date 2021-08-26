import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Pokemon({pokemonUrl}) {
    const [poke, setPoke] = useState({})

    const pokeDetails = async () => {
        const result = await axios.get(pokemonUrl)
        setPoke(result.data.abilities)
        console.log(result.data.abilities)
      }

      useEffect(() => {
          console.log("teste useeffect")
        pokeDetails()
      }, [])

    return (
        <div>
            <h3>{poke[0]?.ability.name}</h3>
        </div>
    )
}

export default Pokemon
