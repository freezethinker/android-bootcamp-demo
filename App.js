import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text,TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = { text: 'Search Something' };
  }

_onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>HELLO WORLD!</Text>
        <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />


      <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                        <View style={styles.button}>
                          <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
      </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
