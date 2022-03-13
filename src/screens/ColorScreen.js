import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const ColorScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const rectHeight = windowWidth / 5;
  const rectWidth = windowWidth / 5;
  const [colors, setColor] = useState([]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const onAddColor = () => {
    const red = getRandomInt(256);
    const green = getRandomInt(256);
    const blue = getRandomInt(256);
    setColor([
      ...colors,
      { key: colors.length, value: `rgb(${red}, ${green}, ${blue})` },
    ]);
  };

  const onResetColor = () => {
    setColor([]);
  };

  return (
    <View>
      <Button title='Add a Color' onPress={onAddColor}></Button>
      <Button title='Reset Color' onPress={onResetColor}></Button>
      <FlatList
        data={colors}
        keyExtractor={(color) => color.key}
        contentContainerStyle={styles.colorList}
        numColumns={5}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  height: rectHeight,
                  width: rectWidth,
                  backgroundColor: `${item.value}`,
                }}
              ></View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    // flexDirection: 'column',
    // flexWrap: 'wrap',
  },
});

export default ColorScreen;
