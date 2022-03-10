import React from 'react';
import { Item, View, FlatList, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'hoge1', age: 20 },
    { name: 'hoge2', age: 30 },
    { name: 'hoge3', age: 40 },
    { name: 'hoge4', age: 10 },
    { name: 'hoge5', age: 20 },
    { name: 'hoge6', age: 30 },
    { name: 'hoge7', age: 40 },
  ];

  return (
    <View>
      <Text style={styles.text}>Friends</Text>
      <FlatList
        // horizontal
        showsHorizontalScrollIndicator={false}
        data={friends}
        style={styles.list}
        keyExtractor={(friends) => friends.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.item}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  item: {
    fontSize: 15,
    marginVertical: 10,
    // marginHorizontal: 30,
  },
  list: {
    borderStyle: 'solid',
  },
});

export default ListScreen;
