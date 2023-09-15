import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Box, Center, Flex, Text, VStack } from 'native-base'
import MaterialIcon from './MaterialIcon'
import { useNavigation } from '@react-navigation/native'
import { ChatStackNavigatorParam } from '../types/NavigatorParam'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


const CustomHeader = () => {
    const navigation = useNavigation<ChatStackNavigatorParam>()

    return (
        <View style={styles.container}>

            <Flex direction='row' >
                <Box flex={2}>
                    <TouchableOpacity style={styles.buttonContainer} >
                        <Box style={styles.buttonContainer}>
                            <MaterialIcon name='chevron-left' color='white' size='large' />
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box flex={8}>
                    <Flex direction='row' alignItems={'center'} >
                        <Avatar />
                        <VStack
                            backgroundColor={'red'} ml={2}>
                            <Text color={'white'}>Kübra Göktaş</Text>
                            <Text color={'rgb(96,93,90)'} fontSize={'xs'} fontWeight={'bold'}>Online</Text>
                        </VStack>
                    </Flex>
                </Box>
                <Box flex={1}>
                    <MaterialIcon name='more-vert' color='white' size='large' />

                </Box>
            </Flex>

        </View>
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