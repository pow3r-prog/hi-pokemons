import { AxiosResponse } from 'axios'
import { axiosInstance } from 'axiosInstance'

import { POKEMON_URLS } from 'config/urls'

import { IPokemon } from '../store/types'

export const getPokemons = (): Promise<AxiosResponse<IPokemon[]>> =>
    axiosInstance.get(`${POKEMON_URLS.pokemon}`)

export const getPokemonById = ({
    pokemonId,
}: {
    pokemonId: string | number | undefined
}): Promise<AxiosResponse<IPokemon>> =>
    axiosInstance.get(`${POKEMON_URLS.pokemon}/${pokemonId}/`)
