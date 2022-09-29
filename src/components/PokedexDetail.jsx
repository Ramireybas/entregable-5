import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokedexDetail = () => {
  const {name}=useParams();
  const [pokemon,setPokemon]= useState({});
  const navigate= useNavigate();
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
          .then(res=>setPokemon(res.data));
  },[])
  console.log(pokemon); 
    return (
        <div>
          <h1>{pokemon.name}</h1> 
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" /> 
          <p>Showing <b>{name}</b></p> 
          
        
        <button onClick={()=>navigate(`/Pokedex`)}>back</button>
        
          
          
        </div>
    );
};

export default PokedexDetail;