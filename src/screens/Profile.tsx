import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Box, Card, Center, Divider, Flex, Text, VStack } from 'native-base';
import CustomHeader from '../components/CustomHeader';

const Profile = () => {
    return (
        <View>
            <Flex direction='column' style={{ height: '100%' }}>
                <Box flex={1} style={styles.container}>
                    <CustomHeader />
                    <Center style={{justifyContent:'center'}}>
                        <Avatar bg="cyan.500" alignSelf="center" size="xl" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}> HS
                        </Avatar>
                        <Text mt={5} color={'white'}>Kübra Göktaş</Text>
                    </Center>
                </Box>
                <Box flex={2}>
                    <Box></Box>
                </Box>
            </Flex>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        color: 'white',
        // justifyContent: 'center'
    },

});

export default Profile