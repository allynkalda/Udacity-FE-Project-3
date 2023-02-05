import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useListCustomers, useRegion } from '../hooks'
import { REGIONS } from '../constants/regions'

import stylesFn from './styles'

export default function Regions() {
  const styles = stylesFn()
  const { selectedRegion, setSelectedRegion } = useRegion()

  const { navigate } = useNavigation()
  const customers = useListCustomers()

  const [ customersByRegion, setCustomersByRegion ] = useState(null)

  useEffect(() => {
    const regionsCustomers = {}
    REGIONS.map((region) => regionsCustomers[region] = customers?.filter(customer => customer.region === region))
    setCustomersByRegion(regionsCustomers)
  }, [ customers ])

  const press = (region) => {
    setSelectedRegion(region)
    navigate('List')
  }

  return (
    <View style={styles.region}>
      {REGIONS.map((region, index) => {
      return <TouchableOpacity
      key={index}
      style={styles.button}
      onPress={() => press(region)}
    >
      <Text style={styles.buttonText}>{region}</Text>
    </TouchableOpacity>
      })}
    </View>
  )
}
