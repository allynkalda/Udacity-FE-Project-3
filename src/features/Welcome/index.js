import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message';

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

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully deleted database!',
      position: 'bottom'
    });
  }

  const onPress = () => {
    showToast()
    deleteCustomersData()
  }
  
  return (
    <View style={styles.welcome}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Create')}
      >
        <Text style={styles.buttonText}>Create New Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Regions')}
      >
        <Text style={styles.buttonText}>Go to Regions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Delete database</Text>
      </TouchableOpacity>
    </View>
  )
}