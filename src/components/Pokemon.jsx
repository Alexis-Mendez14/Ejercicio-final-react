import { useEffect } from "react";
const [pokemon,setPokemon] = useEffect();
useEffect(() =>{
    async function ObtenerPoke() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
        setPokemon (response.json())
    }
    ObtenerPoke()
}, [])
return(
<div>
    <h1>
        Pokemon:
    </h1>
    <h3>{pokemon.name}</h3>
    <h3>{pokemon.sprite}</h3>
</div>

)