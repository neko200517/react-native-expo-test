import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ACTION_GOOD = 'good';
const ACTION_BAD = 'bad';
const ACTION_RESET = 'reset';
const initialState = { good: 0, bad: 0 };

const reducer = (state, action) => {
  const { good, bad } = state;
  switch (action) {
    case ACTION_GOOD:
      return { ...state, good: good + 1 };
    case ACTION_BAD:
      return { ...state, bad: bad + 1 };
    case ACTION_RESET:
      return initialState;
    default:
      return state;
  }
};

const ImageDetail = ({ title, imageSource }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { good, bad } = state;

  const onIncreaseGoodScore = () => {
    dispatch(ACTION_GOOD);
  };
  const onIncreateBadScore = () => {
    dispatch(ACTION_BAD);
  };
  const onResetScore = () => {
    dispatch(ACTION_RESET);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.text}>{title}</Text>
          <Image style={styles.image} source={imageSource} />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onIncreaseGoodScore}>
            <Text style={styles.buttonText}>(・∀・)ｲｲﾈ!!</Text>
            <Text style={styles.buttonText}>{good}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onIncreateBadScore}>
            <Text style={styles.buttonText}>(・∀・)ﾜﾙｲﾈ!!</Text>
            <Text style={styles.buttonText}>{bad}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onResetScore}>
            <Text style={styles.buttonText}>＼(^o^)／ｵﾜﾀ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  image: {},

  card: {
    flexDirection: 'row',
  },
  cardHeader: {
    flexDirection: 'column',
  },

  text: {
    fontSize: 14,
    color: '#555',
  },
  score: {
    fontSize: 10,
    color: '#555',
  },
  buttonWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    marginTop: 17,
    marginLeft: 15,
  },
  button: {
    width: 110,
    borderRadius: 6,

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    padding: 4,
    color: '#555',
    fontSize: 11,
  },
});

export default ImageDetail;
