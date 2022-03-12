import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  const [score, setScore] = useState(0);
  const [badScore, setBadScore] = useState(0);

  const onIncrementScore = () => {
    setScore(score + 1);
  };

  const onDecrementScore = () => {
    setBadScore(badScore - 1);
  };

  const onResetScore = () => {
    setScore(0);
    setBadScore(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.text}>{title}</Text>
          <Image style={styles.image} source={imageSource} />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onIncrementScore}>
            <Text style={styles.buttonText}>(・∀・)ｲｲﾈ!!</Text>
            <Text style={styles.buttonText}>{score}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDecrementScore}>
            <Text style={styles.buttonText}>(・∀・)ﾜﾙｲﾈ!!</Text>
            <Text style={styles.buttonText}>{badScore}</Text>
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
