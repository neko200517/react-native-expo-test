import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ComponentsScreen = (props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // setValue(props.text);
  }, []);

  const greeting = <Text>Hello!</Text>;
  const name = 'Terayama';

  const onSetValue = () => {
    setValue(value + 1);
  };

  return (
    <View>
      <Text style={styles.MainText}>Getting started with React Native!</Text>
      <Text styles={styles.subText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainText: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
