import { View, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { REGIONS } from '../../features/constants/regions'
import stylesFn from './styles'
import Button from '../Button'

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
    <View style={styles.form}>
      <TextInput
        key={'first_name'}
        placeholder='First Name'
        value={firstName}
        style={styles.textInput}
        onChangeText={v => setFormField('first_name', v)}
      />
      <TextInput
        key={'last_name'}
        placeholder='Last Name'
        value={lastName}
        style={styles.textInput}
        onChangeText={v => setFormField('last_name', v)}
      />
      <Picker
        selectedValue={region}
        key={'region'}
        placeholder='Region'
        style={styles.textInput}
        onValueChange={v => setFormField('region', v)}
      >
        {REGIONS.map((region) => <Picker.Item key={region} label={region} value={region} />)}
      </Picker>
      <TextInput
        key={'contact'}
        placeholder='Contact'
        value={contact}
        style={styles.textInput}
        onChangeText={v => setFormField('contact', v)}
      />
      <Button onPress={onSubmit} text="Submit" />
    </View>
  )
}
