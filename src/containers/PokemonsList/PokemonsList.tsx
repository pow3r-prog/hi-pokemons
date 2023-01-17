import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'redux/reducers/rootReducer'

import ReactPaginate from 'react-paginate'

import SearchPokemon from 'components/searchPokemon/SearchPokemon'
import PokemonItem from 'components/pokemonItem/PokemonItem'
import { POKEMON_URLS } from 'config/urls'

import { TError } from 'config/types'

import { fetchPokemonsAction, SetPokemonsAction } from './store/actions'

import './PokemonsList.scss'

const PokemonsList = (): React.ReactElement => {
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(0)

    const limit = 10
    const dispatch = useDispatch()

    const { pokemons } = useSelector((state: RootState) => state.pokemon)

    const pagesVisited = pageNumber * limit
    const pageCount = Math.ceil(pokemons ? pokemons.length : 0 / limit)
    const changePage = ({ selected }: any) => {
        setPageNumber(selected)
    }

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
                pokemons
                    .slice(pagesVisited, pagesVisited + limit)
                    .map((item, index) => (
                        <PokemonItem
                            key={index}
                            name={item.name}
                            url={`${POKEMON_URLS.pokemon}/${item.name}`}
                        />
                    ))
            ) : (
                <div>Loading...</div>
            )}
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={'Previous'}
                nextLabel={'Next'}
                containerClassName={'paginationBtns'}
                previousLinkClassName={'previousBtns'}
                pageLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>
    )
}

export default PokemonsList
