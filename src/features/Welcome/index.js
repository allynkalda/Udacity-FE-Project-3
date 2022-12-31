import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { useDeleteCustomersData } from '../hooks'
import * as actions from '../reducers'

import stylesFn from './styles'

export default function Welcome() {
  const styles = stylesFn()
  const dispatch = useDispatch()

  const { navigate } = useNavigation()
  const { deleteCustomersData } = useDeleteCustomersData()
  useEffect(() => {
    dispatch(actions.loadCustomers())
  }, [dispatch])
  
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Create')}
      >
        <Text>Create New Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Regions')}
      >
        <Text>Go to Regions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => deleteCustomersData()}
      >
        <Text>Delete database</Text>
      </TouchableOpacity>
    </View>
  )
}