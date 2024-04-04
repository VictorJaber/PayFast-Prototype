import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Button({ onPress, title = 'Save', iconName = 'shopping-cart' }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MaterialIcons name={iconName} size={24} color="white" style={styles.icon} />
      <View style={{ marginLeft: 10 }}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Corrigido para 'flex-start' para alinhar ao início
    width: '90.5%',
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
  icon: {
    // Personalize se necessário
  }
});
