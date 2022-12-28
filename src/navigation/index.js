import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/Welcome'
import Create from '../screens/Create'
import Regions from '../screens/Regions'
import List from '../screens/List'
import Customer from '../screens/Customer'
import Edit from '../screens/Edit'

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Welcome'
            >
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                />
                <Stack.Screen
                    name='Create'
                    component={Create}
                />
                <Stack.Screen
                    name='Regions'
                    component={Regions}
                />
                <Stack.Screen
                    name='List'
                    component={List}
                />
                <Stack.Screen
                    name='Customer'
                    component={Customer}
                />
                <Stack.Screen
                    name='Edit'
                    component={Edit}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation