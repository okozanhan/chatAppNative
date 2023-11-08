import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Card ,Text} from 'native-base';

const customCalendarCard = () => {
  return (
    <Card style={styles.CardContainer}>
      <Text fontSize="2xl" bold style={styles.dateText}>12</Text>
      <Text style={styles.dateText}>Kasım</Text>
    </Card>
  );
};

export default customCalendarCard;

const styles = StyleSheet.create({
  CardContainer: {
    marginRight:10,
    backgroundColor: 'rgb(32,27,23)',
    height: 90,
    display:'flex',
    alignItems:'center',
    width: 100,
  },
  dateText: {
    color: 'white',
  },
});
