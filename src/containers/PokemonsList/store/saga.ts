import { AxiosResponse } from 'axios'
import { all, put, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects'

import * as Effects from 'redux-saga/effects'

import { getPokemons, getPokemonById } from '../service/pokemon'

import { pokemonsTypes } from './actionTypes'

import {
    IPokemon,
    FetchPokemonsRequest,
    FetchPokemonByIdRequest,
    IResults,
} from './types'

const call: any = Effects.call

function* fetchPokemonsSaga(action: FetchPokemonsRequest) {
    try {
        const response: AxiosResponse<IResults> = yield call(
            getPokemons,
            action.payload,
        )
        if (response.data) {
            yield put({
                type: pokemonsTypes.SET_POKEMONS,
                payload: { pokemons: response.data.results },
            })
        }
    } catch (error) {
        yield put({ type: pokemonsTypes.POKEMONS_REQUEST_FAILED, error })
    }
}

function* fetchPokemonByIdSaga(action: FetchPokemonByIdRequest) {
    try {
        const response: AxiosResponse<IPokemon> = yield call(
            getPokemonById,
            action.payload,
        )
        if (response.data) {
            yield put({
                type: pokemonsTypes.SET_POKEMON,
                payload: { pokemon: response.data },
            })
        }
    } catch (error) {
        yield put({ type: pokemonsTypes.POKEMONS_REQUEST_FAILED, error })
    }
}

function* pokemonSaga(): Generator<
    AllEffect<ForkEffect<never>>,
    void,
    unknown
> {
    yield all([
        takeLatest(pokemonsTypes.FETCH_POKEMONS_REQUEST, fetchPokemonsSaga),
    ])
    yield all([
        takeLatest(pokemonsTypes.FETCH_POKEMON_BY_ID, fetchPokemonByIdSaga),
    ])
}

export default pokemonSaga
