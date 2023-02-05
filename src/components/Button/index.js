import { Text, TouchableOpacity } from 'react-native'

import stylesFn from './styles'

const Button = ({ onPress, text }) => {
  const styles = stylesFn()


  return (
    <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  )
}

export default Button
