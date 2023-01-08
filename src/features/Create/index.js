import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useUpdateFields, useNewCustomer } from '../hooks'
import Form from '../components/Form'
import stylesFn from './styles'

export default function Create() {
  const styles = stylesFn()

  const { fields, setFormField } = useUpdateFields()
  const { onSubmit, resetForm } = useNewCustomer()

  const {
    first_name,
    last_name,
    region,
    contact
  } = fields

  useEffect(() => {
    resetForm()
  }, [])

  return (
    <View style={styles.create}>
      <Text style={styles.createText}>Create a new customer</Text>
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