import './App.css'
import Pokedex from './components/Pokedex'
import UserInput from './components/UserInput'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PokedexDetail from './components/PokedexDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import style from "./style.css"

function App() {

  //control d para agregar todo
  return (

    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route path="/Pokedex/:name" element={<PokedexDetail />} />
          </Route>
        </Routes>
      </div >
    </HashRouter>



  )
}

export default App
