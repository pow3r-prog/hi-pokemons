import { TCallBack } from 'config/types'

import { pokemonsTypes } from './actionTypes'

export interface PokemonState {
    pokemons?: IPokemon[]
    pokemon?: IPokemon
}

// TODO types for pokemons
export interface IPokemon {
    id?: string
    title: string
    description: string
    imageUrl?: string
    exception?: {
        Message: string
    }
}

export interface FetchPokemonsPayload {
    appId: string
    callback?: TCallBack
}

export interface FetchPokemonsRequest {
    type: typeof pokemonsTypes.FETCH_POKEMONS_REQUEST
    payload: FetchPokemonsPayload
}

export interface FetchPokemonPayload {
    pokemonId: string
    appId: string
    callback?: TCallBack
}

export interface FetchPokemonByIdRequest {
    type: typeof pokemonsTypes.FETCH_POKEMON_BY_ID
    payload: FetchPokemonPayload
}

export interface SetPokemons {
    type: typeof pokemonsTypes.SET_POKEMONS
    payload: { pokemons: IPokemon[] | undefined }
}

export interface SetPokemon {
    type: typeof pokemonsTypes.SET_POKEMON
    payload: { pokemon: IPokemon }
}

export type PokemonActions =
    | FetchPokemonsRequest
    | FetchPokemonByIdRequest
    | SetPokemons
    | SetPokemon
