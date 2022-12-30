import { createSlice } from '@reduxjs/toolkit'
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../utilities/helpers'

const name = 'customer'

const initialState = {
    list: {
        status: PENDING,
        customers: [],
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    form: {
        fields: {
            first_name: '',
            last_name: '',
            region: 'Region 1',
            contact: ''
        },
    },
    error: {
        message: ''
    },
    selectedRegion: '',
    selectedCustomer: ''
}

const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING
    },
    createCustomerResult: (state, { payload }) => {
        state.create.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.create = initialState.create
    },
    createCustomerError: (state, { payload }) => {
        state.create.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editCustomer: (state) => {
        state.edit.status = REQUESTING
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id == payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
    },
    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.edit = initialState.edit
    },
    editCustomerError: (state, { payload }) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editCustomerStatus: (state, { payload }) => {
        state.edit = payload
    },

    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
    setSelectedRegion: (state, { payload }) => {
        state.selectedRegion = payload
    },
    setSelectedCustomer: (state, { payload }) => {
        state.selectedCustomer = payload
        state.form.fields = payload
    },
    loadCustomers: (state) => {
        state.status = REQUESTING
    },
    loadCustomersResult: (state, { payload }) => {
        state.list.animals = payload
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    setForm,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,
    setFormField,
    setSelectedRegion,
    setSelectedCustomer,
    loadCustomers,
    loadCustomersResult
} = slice.actions

export default slice.reducer