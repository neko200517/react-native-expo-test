import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={onIncrease} />
      <Button title={`Less ${title}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
