import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC, ReactNode, useEffect } from 'react'
import { Avatar, Box, Center, Flex, Text, VStack } from 'native-base'
import MaterialIcon from './MaterialIcon'
import { useNavigation } from '@react-navigation/native'
import { ChatStackNavigatorParam } from '../types/NavigatorParam'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface Props {
    children?: ReactNode,
}

const CustomHeader: FC<Props>  = ({ children }) => {
    const navigation = useNavigation();

    useEffect(() => {
    
     
    }, [])
    

    const backTo=()=>{
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Flex direction='row' >
                <Box flex={2}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={backTo}>
                        <Box style={styles.buttonContainer}>
                            <MaterialIcon name='chevron-left' color='white' size='large' />
                        </Box>
                    </TouchableOpacity>
                </Box>
                {children}
            </Flex>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        height: '30%',
        justifyContent: 'center',
        paddingHorizontal: 20,

    },
    buttonContainer: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: 'rgb(32,27,23)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default CustomHeader