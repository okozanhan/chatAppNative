import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatStackNavigatorParam } from '../types/NavigatorParam';
import { useNavigation } from '@react-navigation/native';


type messagesScreenProp = NativeStackNavigationProp<ChatStackNavigatorParam, "Messages">


const CustomBottom = () => {


    const navigation = useNavigation<messagesScreenProp>()


    return (
        <View style={{ backgroundColor: "gray", justifyContent: "space-between" }}>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
                    <View style={styles.tabItem}>
                        <Icon name="task-alt" size={20} color="white" />
                        <Text color={'white'} >
                            Tasks
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.tabItem}>
                    <Icon name="message" size={20} color="white" />
                    <Text color={'white'} >
                        Messages
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.tabItem}>
                        <Icon name="person" size={20} color="white" />
                        <Text color={'white'}>
                            Profile
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default CustomBottom