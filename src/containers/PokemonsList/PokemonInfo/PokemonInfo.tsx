import React, { useEffect } from 'react'

import { TError } from 'config/types'

import { useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'

import { fetchPokemonAction } from '../store/actions'

import './PokemonInfo.scss'

const PokemonInfo = (): React.ReactElement => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { pokemon } = useSelector((state: RootState) => state.pokemon)

    const pathname = location.pathname.split('/').pop()

    useEffect(() => {
        dispatch(
            fetchPokemonAction({
                pokemonName: pathname,
                callback: (type: string, errorArray?: TError[]) => {
                    if (type === 'error') {
                        errorArray?.forEach(err => {
                            console.log(err.description || 'Error from backend')
                        })
                    }
                },
            }),
        )
    }, [dispatch, pathname])

    return (
        <div className='inner-container'>
            {pokemon ? (
                <div className='pokemon--info'>
                    <div>Name: {pokemon.name}</div>
                    <img
                        className='pokemon--info-image'
                        src={pokemon.sprites.front_default}
                        alt='pokemonImage'
                    />
                    <div>HP: {pokemon.stats[0].base_stat}</div>
                    <div>Attack: {pokemon.stats[1].base_stat}</div>
                    <div>Defense: {pokemon.stats[2].base_stat}</div>
                    <div>Type: {pokemon.types[0].type.name}</div>
                </div>
            ) : (
                <div>Pokemon not found...</div>
            )}
        </div>
    )
}

export default PokemonInfo
