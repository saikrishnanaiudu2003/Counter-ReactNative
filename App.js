import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';

 class App extends Component {
  state={
    count:0,
  }

  increaseCount =()=>{
    this.setState((prevState)=>({
      count:prevState.count+1,
    }))
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
      <Text style={styles.mainText}>The Button has been clicked <Text style={styles.spanText}>{this.state.count}</Text> times</Text>
      <Text style={styles.paraText}>Click the button to increase the count</Text>
      <TouchableOpacity style={styles.button} onPress={this.increaseCount} ><Text style={styles.buttonText}>Click Me!</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }
}

export default App;