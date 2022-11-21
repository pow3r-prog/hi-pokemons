import { pokemonsTypes } from './actionTypes'
import {
    IPokemon,
    IPokemons,
    FetchPokemonByIdRequest,
    FetchPokemonPayload,
    FetchPokemonsPayload,
    FetchPokemonsRequest,
    SetPokemons,
    SetPokemon,
} from './types'

export const fetchPokemonsAction = (
    payload: FetchPokemonsPayload,
): FetchPokemonsRequest => ({
    type: pokemonsTypes.FETCH_POKEMONS_REQUEST,
    payload,
})

export const fetchPokemonAction = (
    payload: FetchPokemonPayload,
): FetchPokemonByIdRequest => ({
    type: pokemonsTypes.FETCH_POKEMON_BY_ID,
    payload,
})

export const SetPokemonsAction = (payload: {
    pokemons: IPokemons[] | undefined
}): SetPokemons => ({
    type: pokemonsTypes.SET_POKEMONS,
    payload,
})

export const SetPokemonAction = (payload: {
    pokemon: IPokemon | undefined
}): SetPokemon => ({
    type: pokemonsTypes.SET_POKEMON,
    payload,
})
