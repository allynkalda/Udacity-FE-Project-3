import { all } from 'redux-saga/effects'
import { watchCreateCustomer } from './create'
import { watchEditCustomer } from './edit'
import { watchLoadCustomers } from './load'
import { watchDeleteCustomersData } from './delete'

export default function* customer() {
    yield all([
        watchCreateCustomer(),
        watchEditCustomer(),
        watchLoadCustomers(),
        watchDeleteCustomersData(),
    ])
}