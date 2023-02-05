import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelectedCustomer, useListCustomers, useEditCustomer } from '../hooks'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'
import Button from '../../components/Button'

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
    <View style={styles.customer}>
    <Text style={styles.textTitle}>Customer Data</Text>
    <View style={styles.dataBox}>
    <Text style={styles.text}>First Name: {customerData.first_name}</Text>
    <Text style={styles.text}>Last Name: {customerData.last_name}</Text>
    <Text style={styles.text}>Region: {customerData.region}</Text>
    <Text style={styles.text}>Contact: {customerData.contact}</Text>
    </View>
    <Button onPress={onPress} text="Edit" />
    </View>
  )
}
