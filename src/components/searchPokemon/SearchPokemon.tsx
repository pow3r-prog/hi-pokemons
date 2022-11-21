import React from 'react'

import { useNavigate } from 'react-router-dom'

import { POKEMON_URLS } from 'config/urls'

import './SearchPokemon.scss'

interface ISearch {
    onInputSearch: (name: string) => void
    name: string
}

const SearchPokemon = ({
    onInputSearch,
    name,
}: ISearch): React.ReactElement => {
    const push = useNavigate()

    return (
        <div className='search--bar'>
            <input
                type='text'
                onChange={event => onInputSearch(event.target.value)}
            />
            <button onClick={() => push(`${POKEMON_URLS.pokemon}/${name}`)}>
                Search
            </button>
        </div>
    )
}

export default SearchPokemon
