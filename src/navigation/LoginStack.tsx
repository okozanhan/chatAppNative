import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from '../screens/Home'
import Login from '../screens/Login'
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam'
import Messages from '../screens/Messages'
import Chat from '../screens/Chat'


const LoginStack = () => {
    const Stack = createNativeStackNavigator<LoginStackNavigatorParam>()
    return (
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Messages" component={Messages} />
            <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />

        </Stack.Navigator>
    )
}

export default LoginStack





