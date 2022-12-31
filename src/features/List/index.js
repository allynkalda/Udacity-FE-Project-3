import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import CustomerBox from '../components/CustomerBox'
import { useListCustomers, useRegion, useSelectedCustomer } from '../hooks'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'

export default function List() {
  const styles = stylesFn()

  const [ customersOfRegion, setCustomersOfRegion ] = useState([])
  const { navigate } = useNavigation()
  const { selectedRegion } = useRegion()
  const { setSelectedCustomer } = useSelectedCustomer()
  const customers = useListCustomers()

  useEffect(() => {
    const regionCustomers = customers.filter(customer => customer.region === selectedRegion)
    setCustomersOfRegion(regionCustomers)
  }, [ customers ])

  const onPress = (value) => {
    setSelectedCustomer(value.id)
    navigate('Customer')
  }

  return (
    <View style={styles.list}>
    {customersOfRegion?.length ? 
    customersOfRegion.map((customer, index) => {
      return <CustomerBox key={index} onPress={() => onPress(customer)} firstName={customer.first_name} lastName={customer.last_name} />
      }) : <Text style={styles.noCustomerText}>No Customers!</Text>}

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Create')}
      >
        <Text style={styles.buttonText}>Create New Customer</Text>
    </TouchableOpacity>
    </View>
  )
}