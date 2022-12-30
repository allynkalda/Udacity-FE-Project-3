import { View, Text } from 'react-native'
import { useUpdateFields, useEditCustomer } from '../hooks'
import Form from '../components/Form'
import stylesFn from './styles'

export default function Edit() {
  const styles = stylesFn()

  const { fields, setFormField } = useUpdateFields()
  const { onSubmit } = useEditCustomer()

  const {
    first_name,
    last_name,
    region,
    contact
  } = fields

  console.log('fields', fields)

  return (
    <View>
      <Text>Edit the customer data</Text>
      <Form 
        firstName={first_name}
        lastName={last_name}
        region={region}
        contact={contact}
        setFormField={setFormField}
        onSubmit={onSubmit}
      />
    </View>
  )
}