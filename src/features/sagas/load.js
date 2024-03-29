import { put, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get } from '../../utilities/async_storage'

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers)
}

export function* takeLoadCustomers() {
    try {
        const customers = yield get('CUSTOMERS')

        yield delay(1500)

        yield put(actions.loadCustomersResult(customers === null? [] : customers))
    } catch (error) {
        yield put(actions.loadCustomersResult([]))
    }
}
