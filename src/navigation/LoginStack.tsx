import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from '../screens/Home'
import Login from '../screens/Login'
import Messages from '../screens/Messages'
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam'


const LoginStack = () => {
    const Stack = createNativeStackNavigator<LoginStackNavigatorParam>()
    return (
        <Stack.Navigator >
            <Stack.Screen  name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default LoginStack





