import { View, Text, TouchableOpacity} from 'react-native'
import stylesFn from './styles'

export default function CustomerBox({
  firstName,
  lastName,
  onPress
}) {
  const styles = stylesFn()

  return (
    <View style={styles.customerBox}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.text}>
            First Name: {firstName}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.text}>
            Last Name: {lastName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}