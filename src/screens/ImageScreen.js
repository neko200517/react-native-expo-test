import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from './Components/ImageDetails';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Detail</Text>

      <ImageDetail
        title='Forest1'
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    height: 1000,
  },
  title: {
    fontSize: 30,
    margin: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
    fontWeight: '700',
  },
});

export default ImageScreen;
