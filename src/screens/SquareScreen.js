import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './Components/ColorCounter';

const COLOR_INCREMENT = 25;
const MAX_VALUE = 255;

const SquareScreen = () => {
  const [color, setColorObject] = useState({
    red: 125,
    green: 125,
    blue: 125,
  });
  const { red, green, blue } = color;

  const getColor = () => {
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const addValue = (value, change) => {
    let v = value + change;
    if (value + change > MAX_VALUE) {
      v = MAX_VALUE;
    } else if (value + change < 0) {
      v = 0;
    }
    return v;
  };

  const setColor = (type, change) => {
    let v = 0;
    switch (type) {
      case 'red':
        v = addValue(red, change);
        setColorObject({ ...color, red: v });
        break;
      case 'green':
        v = addValue(green, change);
        setColorObject({ ...color, green: v });
        break;
      default:
        v = addValue(blue, change);
        setColorObject({ ...color, blue: v });
    }
  };

  return (
    <View>
      <ColorCounter
        title='Red'
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -COLOR_INCREMENT)}
      />
      <ColorCounter
        title='Green'
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -COLOR_INCREMENT)}
      />
      <ColorCounter
        title='Blue'
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: getColor(),
        }}
      ></View>
      <Text>{getColor()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
