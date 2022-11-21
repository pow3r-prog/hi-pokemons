import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'

import pokemonSaga from 'containers/PokemonsList/store/saga'

export function* rootSaga(): Generator<
    AllEffect<ForkEffect<void>>,
    void,
    unknown
> {
    yield all([fork(pokemonSaga)])
}
