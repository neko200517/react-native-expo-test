import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './Components/ColorCounter';

const COLOR_INCREMENT = 25;
const MAX_VALUE = 255;

const TYPE_RED = 'red';
const TYPE_GREEN = 'green';
const TYPE_BLUE = 'blue';

const addValue = (value, payload) => {
  let v = value + payload;
  if (v > MAX_VALUE) {
    v = MAX_VALUE;
  }
  if (v < 0) {
    v = 0;
  }
  return v;
};

const reducer = (state, action) => {
  const { red, green, blue } = state;
  const { type, payload } = action;
  switch (type) {
    case TYPE_RED:
      return { ...state, red: addValue(red, payload) };
    case TYPE_GREEN:
      return { ...state, green: addValue(green, payload) };
    case TYPE_BLUE:
      return { ...state, blue: addValue(blue, payload) };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const initialState = {
    red: 125,
    green: 125,
    blue: 125,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  const getColor = () => {
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <ColorCounter
        title='Red'
        onIncrease={() =>
          dispatch({ type: TYPE_RED, payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: TYPE_RED, payload: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title='Green'
        onIncrease={() =>
          dispatch({ type: TYPE_GREEN, payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: TYPE_GREEN, payload: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title='Blue'
        onIncrease={() =>
          dispatch({ type: TYPE_BLUE, payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: TYPE_BLUE, payload: -COLOR_INCREMENT })
        }
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
