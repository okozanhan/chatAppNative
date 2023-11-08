import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Box, Card, Flex, Text} from 'native-base';

const TaskCard = () => {
  return (
    <Card style={styles.cardContainer}>
      <Flex direction="row">
        <Box flex={9}>
          <Text fontSize={'xl'} bold>
            Task Sayfası Tasarım
          </Text>
          <Text style={styles.smallText} fontSize={'sm'}>
            Task Sayfası Tasarım Yapılacak figmada ve koda geçirilecek
          </Text>
        </Box>
        <Box flex={2} style={styles.eforText}>
          <Text fontSize={'xl'} bold>
            9
          </Text>
          <Text fontSize={'md'} bold>
            Saat
          </Text>
        </Box>
      </Flex>
      <Flex direction='row' marginTop={3}>
        <Avatar
          bg="green.500"
          size="xs"
          marginRight={2}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
        <Avatar
          bg="green.500"
          size="xs"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
      </Flex>
    </Card>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: 'rgb(249,249,249)',
  },
  smallText: {
    color: 'rgb(183,183,183)',
  },
  eforText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: 'rgb(183,183,183)',
  },
});
