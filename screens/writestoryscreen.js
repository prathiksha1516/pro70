import React from 'react';
import {StyleSheet,Veiw,Text,image}from react-Navigative;
import {crateAppCaintainer}from react-Navigative;
import {BottomTabNavigation}from react-Navigative -tabs;
import writestoryscreen from './screens/'writestoryscreen
import readstoryscreen from './screens/'import { TouchableOpacity } from 'react-native';
readstoryscreen


render(){
    return(
        <veiw style={style.container}>
        <text> readstory </text>
    
    );
    
    
    }
    
    const style = StyleSheet.create(){
        container:
    }
    <TouchableOpacity
      style-{StyleSheet.submitbutton}
      onPress={this.submitstory}
      >
          <text style={StyleSheet.buttontext>submit</text>
          </TouchableOpacity>
          KeyboardAvoidingView(){

            import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent;
          }