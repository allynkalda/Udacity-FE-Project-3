import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelectedCustomer, useListCustomers, useEditCustomer } from '../hooks'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'

export default function Customer() {
  const styles = stylesFn()
  const [ customerData, setCustomerData ] = useState({})

  const { selectedCustomer } = useSelectedCustomer()
  const { fillEditForm } = useEditCustomer()
  const customers = useListCustomers()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (selectedCustomer) {
        const selectedCustomerData = customers.find(customer => customer.id === selectedCustomer)
        setCustomerData(selectedCustomerData)
    }
  }, [ selectedCustomer, customers ])

  const onPress = () => {
    navigate('Edit')
    fillEditForm(selectedCustomer)
  }

  return (
    <View>
    <Text>Customer Data</Text>
    <Text>First Name: {customerData.first_name}</Text>
    <Text>Last Name: {customerData.last_name}</Text>
    <Text>Region: {customerData.region}</Text>
    <Text>Contact: {customerData.contact}</Text>
    <TouchableOpacity
        onPress={onPress}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  )
}