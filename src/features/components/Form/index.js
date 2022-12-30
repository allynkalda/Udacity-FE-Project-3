import { View, Text, TextInput, Picker, TouchableOpacity } from 'react-native'
import { REGIONS } from '../../constants/regions'
import stylesFn from './styles'

export default function Form({
  firstName,
  lastName,
  region,
  contact,
  setFormField,
  onSubmit
}) {
  const styles = stylesFn()

  return (
    <View>
      <TextInput
        key={'first_name'}
        placeholder='First Name'
        value={firstName}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={v => setFormField('first_name', v)}
      />
      <TextInput
        key={'last_name'}
        placeholder='Last Name'
        value={lastName}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={v => setFormField('last_name', v)}
      />
        <Picker
        selectedValue={region}
        key={'region'}
        placeholder='Region'
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onValueChange={v => setFormField('region', v)}
      >
        {REGIONS.map((region) => <Picker.Item key={region} label={region} value={region} />)}
      </Picker>
      <TextInput
        key={'contact'}
        placeholder='Contact Details'
        value={contact}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={v => setFormField('contact', v)}
      />
      <TouchableOpacity
        onPress={onSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}