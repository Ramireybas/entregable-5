import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})
    const navigate= useNavigate();
    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
    }, [])

    return (

        <div 
        onClick={()=>navigate(`/Pokedex/${pokemon.name}`)}
        >
            <ul className='card' >
                <li className='pokemon'>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />  
            </li>
            </ul> 
        </div>


    );
};

export default PokemonCard;