import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokeName.slice';

const UserInput = () => {
    const dispatch= useDispatch();
    const[ pokeName, setPokeName] = useState("");
    const navigate =useNavigate()

    const dispatchPokeName = ()=>{
        dispatch(changeName(pokeName))
        navigate("/pokedex")
    }
    return (
        <div>
            <h1>Search Pokemon</h1>
            <input type="text" 
            placeholder="what's your name?"
            value={pokeName}
             onChange={e=>setPokeName(e.target.value)}
              />
            <button onClick={dispatchPokeName}><i className="fa-solid fa-paper-plane"></i></button>
        </div>
    );
};

export default UserInput;