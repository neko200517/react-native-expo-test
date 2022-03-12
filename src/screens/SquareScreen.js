import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './Components/ColorCounter';

const SquareScreen = () => {
  const [red, setRedColor] = useState(125);
  const [green, setGreenColor] = useState(125);
  const [blue, setBlueColor] = useState(125);

  const COLOR_INCREMENT = 25;
  const MAX_VALUE = 255;

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

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        setRedColor(addValue(red, change));
        break;
      case 'green':
        setGreenColor(addValue(green, change));
        break;
      default:
        setBlueColor(addValue(blue, change));
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
