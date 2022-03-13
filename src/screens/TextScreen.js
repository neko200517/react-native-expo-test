import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const LENGTH_PASSWORD = 6;

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const showCautionText = () => {
    return password.length < LENGTH_PASSWORD ? (
      <Text>{`Password must be ${LENGTH_PASSWORD} characters`}</Text>
    ) : null;
  };

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={setName}
        value={name}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={setPassword}
        keyboardType='visible-password'
        value={password}
      />
      {showCautionText()}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default TextScreen;
