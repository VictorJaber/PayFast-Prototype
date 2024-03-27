import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save', icon = require("../../../assets/cart.png") } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={icon} />
      <View style={{
        marginLeft: 10
      }}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    width: '87%',
    alignItems: 'center',
    justifyContent: 'left',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#FF6B00',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
