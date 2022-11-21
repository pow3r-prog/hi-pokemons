import { TCallBack } from 'config/types'

import { pokemonsTypes } from './actionTypes'

export interface PokemonState {
    pokemons?: IPokemons[]
    pokemon?: IPokemon
    results?: IResults[]
}

export interface IPokemons {
    name: string
    url: string
}

export interface IPokemon {
    id?: string
    name: string
    sprites: TPokemon
    stats: TPokemon[]
    types: TPokemon[]
}

export interface IResults {
    results: IPokemons[]
}

type TPokemon = {
    front_default: string
    base_stat: number | string
    type: TTypeName
}

type TTypeName = {
    name: string
}

export interface FetchPokemonsPayload {
    callback?: TCallBack
}

export interface FetchPokemonsRequest {
    type: typeof pokemonsTypes.FETCH_POKEMONS_REQUEST
    payload: FetchPokemonsPayload
}

export interface FetchPokemonPayload {
    pokemonName: string | undefined
    callback?: TCallBack
}

export interface FetchPokemonByIdRequest {
    type: typeof pokemonsTypes.FETCH_POKEMON_BY_ID
    payload: FetchPokemonPayload
}

export interface SetPokemons {
    type: typeof pokemonsTypes.SET_POKEMONS
    payload: { pokemons: IPokemons[] | undefined }
}

export interface SetPokemon {
    type: typeof pokemonsTypes.SET_POKEMON
    payload: { pokemon: IPokemon | undefined }
}

export type PokemonActions =
    | FetchPokemonsRequest
    | FetchPokemonByIdRequest
    | SetPokemons
    | SetPokemon
