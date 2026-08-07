import React from 'react';
import { View, Text } from 'react-native';
import  PageBackground  from "@/assets/svg/page_bg.svg";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1
  }
}); 

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
    </View>
  );
}
