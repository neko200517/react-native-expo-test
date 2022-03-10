import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState([]);

  const onAddTag = () => {
    setText([...text, { key: text.length, title: `Tag ${text.length}` }]);
  };

  const onResetTag = () => {
    setText([]);
  };

  const onGotoComponentDemo = () => {
    navigation.navigate('Components');
  };
  const onGotoListDemo = () => {
    navigation.navigate('List');
  };

  return (
    <View style={styles.container}>
      <View styles={styles.buttonWrapper}>
        <Text style={styles.title}>HELLO!</Text>
        <Button title='Go to Component Demo' onPress={onGotoComponentDemo} />
        <TouchableOpacity style={styles.button} onPress={onGotoListDemo}>
          <Text style={styles.buttonText}>Go to List Demo</Text>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={onAddTag}>
          <Text style={styles.buttonText}>ADD TAG</Text>
        </Pressable>
        <Pressable style={styles.borderButton} onPress={onResetTag}>
          <Text style={styles.borderButtonText}>RESET TAG</Text>
        </Pressable>
      </View>

      <FlatList
        contentContainerStyle={styles.itemWrapper}
        data={text}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  buttonWrapper: {},
  button: {
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,

    /* preview */
    width: 150,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2C8CE3',

    /* shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
  borderButton: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  borderButtonText: {
    color: 'black',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333',
  },
  itemWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  item: {
    color: '#555',
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#888',
    marginBottom: 8,
    marginRight: 4,
    padding: 4,
  },
});

export default HomeScreen;
