import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemon(res.data.results)
            })

        return () => { // acts as componentWillMount
            console.log('goodbye')
        }
    }, []) //an empty array acts as componentDidMount

    return (
        <div>
            <h1>PoKeMoN</h1>
            {JSON.stringify(pokemon)}
        </div>
    )
}; 

export default PokemonList;