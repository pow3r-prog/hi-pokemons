import React from 'react'
import { Link } from 'react-router-dom'

import './PokemonItem.scss'

interface IPokemonItem {
    name: string
    url: string
}

const PokemonItem = ({ name, url }: IPokemonItem): React.ReactElement => {
    return (
        <div className='pokemon--item'>
            <div className='pokemon--item-name'>{name}</div>
            <Link className='pokemon--item-url' to={url}>
                Info
            </Link>
        </div>
    )
}

export default PokemonItem
