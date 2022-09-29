
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
//https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155

const Pokedex = () => {
    const name = useSelector(state => state.pokeName)
    const [pokemonList, setPokemonList] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [typeList, setTypeList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => setPokemonList(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypeList(res.data.results));
    }, []);

    const searchName = () => {
        navigate(`/Pokedex/${nameInput}`)
    }
    const searchType = (typeUrl) => {
        axios.get(typeUrl)
            .then(res => setPokemonList(res.data.pokemon))
    }
    const [page, setPage] = useState(1);
    const pokemonPerPage = 5;
    const lastPokemonIndex = page * pokemonPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
    const pokemonPaginated = pokemonList.slice(firstPokemonIndex, lastPokemonIndex)
    const totalPages = Math.ceil(pokemonList.length / pokemonPerPage)
    const pagesNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
    }
    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Welcome {name}</h2>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Prev page
            </button>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Next page
            </button>
            {pagesNumbers.map(number => (
                <button 
                    onClick={() => setPage(number)}
                    key={number}
                    >
                    {number}
                </button>))}
            <div>
                <input
                    type="text"
                    placeholder='search by name'
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                />
                <div>
                    <select
                        onChange={e => searchType(e.target.value)}>
                        {typeList.map((type) => (
                            <option
                                value={type.url}
                                key={type.url}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={searchName}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className='container'>
            {pokemonPaginated.map((pokemon) => (
                <PokemonCard
                    url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                />
            ))
            }
            </div>
        </div>
    );
};

export default Pokedex;