import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { clear } from '../../utilities/async_storage'

export function* watchDeleteCustomersData() {
    yield takeLatest(actions.deleteCustomersData.toString(), takeDeleteCustomersData)
}

export function* takeDeleteCustomersData() {
    try {
        const customers = yield set('CUSTOMERS', [])

        yield delay(1500)

        yield put(actions.loadCustomersResult([]))
    } catch (error) {
        const customers = yield set('CUSTOMERS', [])
        yield put(actions.loadCustomersResult([]))
    }
}