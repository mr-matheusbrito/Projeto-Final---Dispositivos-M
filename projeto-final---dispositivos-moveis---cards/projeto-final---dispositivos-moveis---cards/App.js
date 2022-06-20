import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import Card from './Card' ;
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';



export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Card/>
      </View>
    )
   
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: '#F5FCFF', 
  },
})

