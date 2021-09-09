import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Pokemon({ pokemonUrl }) {
    const [poke, setPoke] = useState({
        name: "",
        img: "",
        attack: "",
        defense: "",
        type: "",
        hp: "",
    })

    const pokeDetails = async () => {
        const result = await axios.get(pokemonUrl)
        setPoke({
            name: result.data.name,
            img: result.data.sprites.front_default,
            attack: result.data.stats[1].base_stat,
            defense: result.data.stats[2].base_stat,
            type: result.data.types[0].type.name,
            hp: result.data.stats[0].base_stat,
        })
    }

    useEffect(() => {
        pokeDetails()
    }, [])

    return (
        <div className="detailspoke">
            <h2>Name: {poke.name}</h2>
            <img src={poke.img} />
            <h5>Attack: {poke.attack}</h5>
            <h5>Defense: {poke.defense}</h5>
            <h5>Type: {poke.type}</h5>
            <h5>HP: {poke.hp}</h5>
        </div>
    )
}
export default Pokemon
