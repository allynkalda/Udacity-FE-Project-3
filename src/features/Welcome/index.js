import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'

export default function Welcome() {
  const styles = stylesFn()

  const { navigate } = useNavigation()

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
    </View>
  )
}