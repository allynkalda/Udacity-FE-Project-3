import { put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../utilities/async_storage'

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    console.log('Starting fetch request to API')
    try {
        const stat = yield select()
        console.log('stat', stat)
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        // pretend call to API
        yield delay(500)

        const result = [customer, ...customers]
        console.log('result', result)

        yield set('CUSTOMERS', result)

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        console.log('error', error)
        yield put(actions.createCustomerError(error.toString()))
    }
}
