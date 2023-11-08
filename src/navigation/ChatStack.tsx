import { View, Text } from 'react-native'
import React from 'react'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Messages from '../screens/Messages'
import Chat from '../screens/Chat'
import { ChatStackNavigatorParam } from '../types/NavigatorParam'
import Profile from '../screens/Profile'
import Tasks from '../screens/Tasks'

const ChatStack = () => {
    const Stack = createNativeStackNavigator<ChatStackNavigatorParam>()
    return (
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Messages" component={Messages} />
            <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ headerShown: false }} name="Tasks" component={Tasks} />

        </Stack.Navigator>
    )
}

export default ChatStack