import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from '../screens/Home'
import Login from '../screens/Login'






const LoginStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default LoginStack





