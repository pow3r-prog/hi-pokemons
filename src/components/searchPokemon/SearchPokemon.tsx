import React from 'react'

import './SearchPokemon.scss'

interface ISearch {
    name: string
    onSearch: (event: any) => void
}

const SearchPokemon = ({ name, onSearch }: ISearch): React.ReactElement => {
    return (
        <div className='search--bar'>
            <input type='text' onChange={onSearch} />
            <button>Search</button>
        </div>
    )
}

export default SearchPokemon
