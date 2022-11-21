import { pokemonsTypes } from './actionTypes'
import { PokemonActions, PokemonState } from './types'

const initialState: PokemonState = {
    pokemons: undefined,
    pokemon: undefined,
}

const pokemonReducer = (
    state = initialState,
    action: PokemonActions,
): PokemonState => {
    switch (action.type) {
        case pokemonsTypes.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload.pokemons,
            }
        case pokemonsTypes.SET_POKEMON:
            return {
                ...state,
                pokemon: action.payload.pokemon,
            }
        default:
            return {
                ...state,
            }
    }
}

export default pokemonReducer
