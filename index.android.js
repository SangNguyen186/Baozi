import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as Progress from 'react-native-progress';
export default class Baozi extends Component {
  constructor(props){
    super(props)
    this.state={
      progress:0.5
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Progress.Bar progress={this.state.progress} width={200} height={15} borderColor={"black"} color={'red'} borderRadius={2}/>
        <Text style={styles.welcome}>
          Baozi!
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily:'futrfw'
  },
  welcome2: {
    fontSize: 25,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Baozi', () => Baozi);
