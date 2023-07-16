import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './LoginStack'

const Index = () => {
  return (
    <NavigationContainer>
        <LoginStack></LoginStack>
    </NavigationContainer>
  )
}

export default Index