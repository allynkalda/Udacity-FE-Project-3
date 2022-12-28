import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer() {
    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const updatedItems = customers.map(customer => customer.id === fields.id ? fields : customer)

        yield delay(500)

        const result = updatedItems

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}