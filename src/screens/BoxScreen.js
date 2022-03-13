import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>alignItems = stretch #default</Text>
      <View style={styles.viewStyle1}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>alignItems = flex-start</Text>
      <View style={styles.viewStyle2}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>alignItems = center</Text>
      <View style={styles.viewStyle3}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>alignItems = flex-end</Text>
      <View style={styles.viewStyle4}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>flexDirection = column #default</Text>
      <View style={styles.viewStyle5}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>
        flexDirection = row, alignItems = stretch #default
      </Text>
      <View style={styles.viewStyle6}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>
        flexDirection = row, alignItems = flex-start
      </Text>
      <View style={styles.viewStyle7}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>flexDirection = row, alignItems = center</Text>
      <View style={styles.viewStyle8}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>
        flexDirection = row, alignItems = flex-end
      </Text>
      <View style={styles.viewStyle9}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = flex-start</Text>
      <View style={styles.viewStyle10}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = center</Text>
      <View style={styles.viewStyle11}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = flex-end</Text>
      <View style={styles.viewStyle12}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = space-between</Text>
      <View style={styles.viewStyle13}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = space-around</Text>
      <View style={styles.viewStyle14}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>justifyContent = space-evenly</Text>
      <View style={styles.viewStyle15}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>

      <Text style={styles.text}>flex:1, flex:2, flex:1</Text>
      <View style={styles.viewStyle16}>
        <Text style={styles.textStyle1}>Child #1</Text>
        <Text style={styles.textStyle2}>Child #2</Text>
        <Text style={styles.textStyle1}>Child #3</Text>
      </View>

      <Text style={styles.text}>alignSelf</Text>
      <View style={styles.viewStyle16}>
        <Text style={styles.textStyle}>alignself = strech #default</Text>
        <Text style={styles.textStyle3}>alignSelf = flex-start</Text>
        <Text style={styles.textStyle4}>alignSelf = center</Text>
        <Text style={styles.textStyle5}>alignSelf = flex-end</Text>
      </View>

      <Text style={styles.text}>position</Text>
      <View style={styles.viewStyle17}>
        <Text style={styles.textStyle6}>Child #1</Text>
        <Text style={styles.textStyle7}>Child #2</Text>
        <Text style={styles.textStyle6}>Child #3</Text>
      </View>

      <Text style={styles.text}>top, botom, left, right</Text>
      <View style={styles.viewStyle18}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle8}>top = 5</Text>
        <Text style={styles.textStyle}>Child #3</Text>
        <Text style={styles.textStyle9}>bottom = 5</Text>
        <Text style={styles.textStyle}>Child #3</Text>
        <Text style={styles.textStyle10}>left = 10</Text>
        <Text style={styles.textStyle}>Child #3</Text>
        <Text style={styles.textStyle11}>right = 10</Text>
      </View>

      <Text style={styles.text}>absolute fill object</Text>
      <View style={styles.viewStyle16}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle12}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>

      <Text style={styles.text}>Plactice</Text>
      <View style={styles2.parent}>
        <View style={styles2.child1}></View>
        <View style={styles2.parent2}>
          <View style={styles2.child2}></View>
        </View>
        <View style={styles2.child3}></View>
      </View>
    </ScrollView>
  );
};

const borderWidth = 1;
const margin = 20;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    marginTop: margin,
    fontWeight: 'bold',
    fontSize: 14,
  },
  viewStyle1: {
    borderWidth: borderWidth,
    borderColor: 'black',
    alignItems: 'stretch',
  },
  viewStyle2: {
    borderWidth: borderWidth,
    borderColor: 'black',
    alignItems: 'flex-start',
  },
  viewStyle3: {
    borderWidth: borderWidth,
    borderColor: 'black',
    alignItems: 'center',
  },
  viewStyle4: {
    borderWidth: borderWidth,
    borderColor: 'black',
    alignItems: 'flex-end',
  },
  viewStyle5: {
    borderWidth: borderWidth,
    borderColor: 'black',
    flexDirection: 'column',
  },
  viewStyle6: {
    borderWidth: borderWidth,
    borderColor: 'black',
    flexDirection: 'row',
    height: 50,
  },
  viewStyle7: {
    borderWidth: borderWidth,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
  },
  viewStyle8: {
    borderWidth: borderWidth,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  viewStyle9: {
    borderWidth: borderWidth,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50,
  },
  viewStyle10: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'flex-start',
    height: 75,
  },
  viewStyle11: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'center',
    height: 75,
  },
  viewStyle12: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'flex-end',
    height: 75,
  },
  viewStyle13: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'space-between',
    height: 75,
  },
  viewStyle14: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'space-around',
    height: 75,
  },
  viewStyle15: {
    borderWidth: borderWidth,
    borderColor: 'black',
    justifyContent: 'space-evenly',
    height: 75,
  },
  viewStyle16: {
    borderWidth: borderWidth,
    borderColor: 'black',
    height: 100,
  },
  viewStyle17: {
    borderWidth: borderWidth,
    borderColor: 'black',
    height: 100,
    position: 'relative',
  },
  viewStyle18: {
    borderWidth: borderWidth,
    borderColor: 'black',
    height: 175,
  },
  textStyle1: {
    flex: 1,
    borderWidth: borderWidth,
    borderColor: 'red',
  },
  textStyle2: {
    flex: 2,
    borderWidth: borderWidth,
    borderColor: 'red',
  },
  textStyle3: {
    flex: 2,
    borderWidth: borderWidth,
    borderColor: 'red',
    alignSelf: 'flex-start',
  },
  textStyle4: {
    flex: 2,
    borderWidth: borderWidth,
    borderColor: 'red',
    alignSelf: 'center',
  },
  textStyle5: {
    flex: 2,
    borderWidth: borderWidth,
    borderColor: 'red',
    alignSelf: 'flex-end',
  },
  textStyle6: {
    flex: 1,
    borderWidth: borderWidth,
    borderColor: 'red',
    backgroundColor: '#aaf',
  },
  textStyle7: {
    borderWidth: borderWidth,
    borderColor: 'red',
    position: 'absolute',
    backgroundColor: '#faa',
  },
  textStyle8: {
    borderWidth: borderWidth,
    borderColor: 'red',
    top: 5,
    backgroundColor: '#faa',
  },
  textStyle9: {
    borderWidth: borderWidth,
    borderColor: 'red',
    bottom: 5,
    backgroundColor: '#afa',
  },
  textStyle10: {
    borderWidth: borderWidth,
    borderColor: 'red',
    left: 10,
    backgroundColor: '#aaf',
  },
  textStyle11: {
    borderWidth: borderWidth,
    borderColor: 'red',
    right: 10,
    backgroundColor: '#ffa',
  },
  textStyle12: {
    borderWidth: borderWidth,
    borderColor: 'red',
    position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffa',
  },
  textStyle: {
    borderWidth: borderWidth,
    borderColor: 'red',
  },
});

const styles2 = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  parent2: {
    height: 150,
    justifyContent: 'flex-end',
  },
  child1: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#a88',
    backgroundColor: '#fcc',
  },
  child2: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#8a8',
    backgroundColor: '#cfc',
  },
  child3: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#88a',
    backgroundColor: '#ccf',
  },
});

export default BoxScreen;
