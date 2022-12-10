import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import stylesFn from './styles'

export default function Regions() {
  const styles = stylesFn()

  const { navigate } = useNavigation()

  const press = () => navigate('Create')

  return (
    <View>
      <Text style={styles.title}>Regions</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={press}
      >
        <Text>Region 1</Text>
      </TouchableOpacity>
    </View>
  )
}
