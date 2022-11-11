/* eslint-disable max-len */
import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'

export function* rootSaga(): Generator<
    AllEffect<ForkEffect<void>>,
    void,
    unknown
> {
    yield all([])
}
