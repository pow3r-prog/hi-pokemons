import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'redux/reducers/rootReducer'

import SearchPokemon from 'components/searchPokemon/SearchPokemon'
import PokemonItem from 'components/pokemonItem/PokemonItem'
import { POKEMON_URLS } from 'config/urls'

import { TError } from 'config/types'

import { fetchPokemonsAction, SetPokemonsAction } from './store/actions'

import './PokemonsList.scss'

const PokemonsList = (): React.ReactElement => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const { pokemons } = useSelector((state: RootState) => state.pokemon)

    useEffect(() => {
        dispatch(
            fetchPokemonsAction({
                callback: (type: string, errorArray?: TError[]) => {
                    if (type === 'error') {
                        errorArray?.forEach(err => {
                            console.log(err.description || 'Error from backend')
                        })
                    }
                },
            }),
        )

        return () => {
            dispatch(
                SetPokemonsAction({
                    pokemons: undefined,
                }),
            )
        }
    }, [dispatch])

    return (
        <div className='inner-container'>
            <SearchPokemon onInputSearch={setSearch} name={search} />
            {pokemons ? (
                pokemons.map((item, index) => (
                    <PokemonItem
                        key={index}
                        name={item.name}
                        url={`${POKEMON_URLS.pokemon}/${item.name}`}
                    />
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default PokemonsList
