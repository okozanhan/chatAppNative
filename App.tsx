/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigation/LoginStack';
import { NativeBaseProvider } from 'native-base';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <LoginStack></LoginStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



export default App;