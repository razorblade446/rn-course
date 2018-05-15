import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}/>
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 26
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
