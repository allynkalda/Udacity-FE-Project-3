import { View, Text, TextInput, Picker } from 'react-native'

import { REGIONS } from '../../../constants/regions'
import stylesFn from './styles'

export default function Create() {
  const styles = stylesFn()

  const onChangeText = () => {}
  return (
    <View>
      <Text style={styles.title}>Create new customer</Text>

      <TextInput
        key={'first-name'}
        placeholder='First Name'
        // value={value}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => onChangeText(text)}
      />
      <TextInput
        key={'last-name'}
        placeholder='Last Name'
        // value={value}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => onChangeText(text)}
      />
        <Picker
        // selectedValue={selectedValue}
        key={'region'}
        placeholder='Region'
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {REGIONS.map((region) => <Picker.Item label={region} value={region} />)}
      </Picker>
    </View>
  )
}