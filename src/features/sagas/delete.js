import { put, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../utilities/async_storage'

export function* watchDeleteCustomersData() {
    yield takeLatest(actions.deleteCustomersData.toString(), takeDeleteCustomersData)
}

export function* takeDeleteCustomersData() {
    try {
        yield set('CUSTOMERS', [])
        yield delay(1500)

        yield put(actions.loadCustomersResult([]))
    } catch (error) {
        yield set('CUSTOMERS', [])
        yield put(actions.loadCustomersResult([]))
    }
}