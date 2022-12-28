import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = () => {
  const dispatch = useDispatch()
  const fields = useSelector(state => state.customer.form.fields)

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useNewCustomer = () => {
  const dispatch = useDispatch()

  return {
      onSubmit: () => {
        console.log('Dispatching CREATE_CUSTOMER action')
        dispatch(actions.createCustomer())
      }
  }
}

export const useListCustomers = () => {
  return useSelector(state => state.customer.list.customers)
}

export const useRegion = () => {
  const dispatch = useDispatch()

  const selectedRegion = useSelector(state => state.customer.selectedRegion)

  return {
    selectedRegion,
    setSelectedRegion: (value) => {
      dispatch(actions.setSelectedRegion(value))
    }
  }
}

export const useSelectedCustomer = () => {
  const dispatch = useDispatch()

  const selectedCustomer = useSelector(state => state.customer.selectedCustomer)

  return {
    selectedCustomer,
    setSelectedCustomer: (value) => {
      dispatch(actions.setSelectedCustomer(value))
    }
  }
}

export const useEditCustomer = () => {
  const dispatch = useDispatch()

  return {
      onSubmit: () => {
        console.log('Dispatching EDIT_CUSTOMER action')
        dispatch(actions.editCustomer())
      }
  }
}