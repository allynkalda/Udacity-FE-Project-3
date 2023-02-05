import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message';

import { useDeleteCustomersData } from '../hooks'
import * as actions from '../reducers'

import stylesFn from './styles'
import { askNotification } from '../../utilities/notification';
import Button from '../../components/Button';

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
      <Button onPress={() => navigate('Create')} text="Create New Customer" />
      <Button onPress={() => navigate('Regions')} text="Go to Regions" />
      <Button onPress={onPress} text="Delete database" />
    </View>
  )
}
