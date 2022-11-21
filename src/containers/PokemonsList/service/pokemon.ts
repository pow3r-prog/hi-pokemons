import { AxiosResponse } from 'axios'
import { axiosInstance } from 'axiosInstance'

import { POKEMON_URLS } from 'config/urls'

import { IPokemon, IResults } from '../store/types'

export const getPokemons = (): Promise<AxiosResponse<IResults[]>> =>
    axiosInstance.get(`${POKEMON_URLS.pokemon}`)

export const getPokemonById = ({
    pokemonName,
}: {
    pokemonName: string | undefined
}): Promise<AxiosResponse<IPokemon>> =>
    axiosInstance.get(`${POKEMON_URLS.pokemon}/${pokemonName}/`)
