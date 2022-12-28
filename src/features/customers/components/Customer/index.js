import { View, Text, TouchableOpacity } from 'react-native'
import { useSelectedCustomer } from '../../hooks'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'

export default function List() {
  const styles = stylesFn()

  const { selectedCustomer } = useSelectedCustomer()
  const { navigate } = useNavigation()

  console.log('selectedCustomer', selectedCustomer)

  const onPress = () => {
    navigate('Edit')
  }

  return (
    <View>
    <Text>Customer Data</Text>
    <Text>First Name: {selectedCustomer.first_name}</Text>
    <Text>Last Name: {selectedCustomer.last_name}</Text>
    <Text>Region: {selectedCustomer.region}</Text>
    <Text>Contact: {selectedCustomer.contact}</Text>
    <TouchableOpacity
        onPress={onPress}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  )
}