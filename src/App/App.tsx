import React from 'react'
import PokemonsList from 'containers/PokemonsList/PokemonsList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PokemonInfo from 'containers/PokemonsList/PokemonInfo/PokemonInfo'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path={'/'} element={<PokemonsList />} />
                    <Route path={'/pokemon/:id'} element={<PokemonInfo />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
