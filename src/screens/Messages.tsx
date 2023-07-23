import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, Flex, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

type messagesScreemProp = NativeStackNavigationProp<LoginStackNavigatorParam, "Messages">


const Messages = () => {

    const navigation = useNavigation<messagesScreemProp>()

    const redirect = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <Flex direction='column' style={{ height: '100%' }}>
                <Box style={styles.box1} flex={1} >
                    <View style={styles.view1}>
                        <Text style={styles.text1} color={'white'}>
                            Welcome User
                        </Text>
                        <View style={{ marginLeft: 10 }}>
                            <Icon name="gesture" size={20} color="#900" />
                        </View>
                    </View>

                    <Text style={styles.text2} color={'white'}>
                        ChatApp
                    </Text>
                    <View style={styles.view2}>
                        <Text style={styles.story} color={'white'}>
                            Story
                        </Text>
                        <Text style={{ color: "gray" }} color={'white'}>
                            See All
                        </Text>
                    </View>
                    <View style={styles.view1}>
                        <View>
                            <Avatar bg="#1F1B17" style={{ width: 75, height: 75, marginRight: 10 }} >
                                <Text color={"white"} fontSize={30}>+</Text>
                            </Avatar>
                            <Text style={{ color: "gray", fontSize: 13, marginLeft: 10 }}>Add Story</Text>
                        </View>
                        <View>
                            <Avatar bg="green.500" style={{ width: 75, height: 75 }} source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                                AJ
                            </Avatar>
                            <Text style={{ color: "white" }}>username</Text>
                        </View>
                    </View>
                </Box>
                <Box style={styles.box2} flex={2} >
                    <View style={styles.view3}>
                        <Text fontSize="xl" color={'black'} bold>
                            Recent Chat
                        </Text>
                        <Flex direction='row' alignItems={"center"} backgroundColor={"#F4E0B9"} p={2} borderRadius={50}>
                            <Icon name="archive" size={20} color="#900" />
                            <Text color={'black'} bold>
                                Archive Chat
                            </Text>
                        </Flex>
                    </View>
                    <Box>
                        <TouchableOpacity onPress={redirect}>
                            <Flex direction='row' alignItems={"center"} style={styles.message}>
                                <Avatar bg="green.500" style={{ width: 50, height: 50 }} source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                    AJ
                                </Avatar>
                                <Flex direction='row' justifyContent={"flex-start"} ml={5} style={{ width: "70%" }}>
                                    <Flex direction='column' alignItems={"flex-start"}>
                                        <Text color={'black'} bold >
                                            username
                                        </Text>
                                        <Text color={'black'} bold >
                                            asdasd username username usas
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Text color={'black'} bold style={{ marginLeft: 10 }}>
                                    12.12
                                </Text>
                            </Flex>
                        </TouchableOpacity>
                    </Box>
                </Box>
                <View style={{ backgroundColor: "gray", justifyContent: "space-between" }}>
                    <View style={styles.bottom}>
                        <View style={styles.tabItem}>
                            <Icon name="archive" size={20} color="#900" />
                            <Text color={'white'} >
                                Calls
                            </Text>
                        </View>
                        <View style={styles.tabItem}>
                            <Icon name="archive" size={20} color="#900" />
                            <Text color={'white'} >
                                Messages
                            </Text>
                        </View>
                        <View style={styles.tabItem}>
                            <Icon name="archive" size={20} color="#900" />
                            <Text color={'white'} >
                                Profile
                            </Text>
                        </View>
                    </View>
                </View>
            </Flex>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        margin: 25
    },
    avatarButton: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    text1: {
        marginTop: 10,
        marginBottom: 10,
        color: "gray"
    },
    text2: {
        marginBottom: 10,
        color: "white",
        fontSize: 30,
        paddingTop: 10
    },
    message: {
        width: "100%",
        padding: 10,
    },
    story: {
        // marginTop: 10,
        marginBottom: 10,
        color: "white",
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    box1: {
        backgroundColor: "black",
    },
    box2: {
        backgroundColor: "white",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
    },
    bottom: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        backgroundColor: '#0D0703',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 50,
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default Messages