import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, TextInput, Button } from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = { text: 'Search Something' };
  }

  onPressLearnMore() {
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
