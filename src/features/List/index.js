import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
    console.log('regionCustomers', regionCustomers)
    setCustomersOfRegion(regionCustomers)
  }, [ customers ])

  const onPress = (value) => {
    setSelectedCustomer(value.id)
    navigate('Customer')
  }

  return (
    <View>
    <Text>Customers List</Text>
    {customersOfRegion?.length ? 
    customersOfRegion.map((customer, index) => {
        return <TouchableOpacity key={index} style={styles.title} onPress={() => onPress(customer)}><Text>{customer.first_name}</Text></TouchableOpacity>
      }) : <Text style={styles.title}>No Customers!</Text>}

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Create')}
      >
        <Text>Create New Customer</Text>
    </TouchableOpacity>
    </View>
  )
}