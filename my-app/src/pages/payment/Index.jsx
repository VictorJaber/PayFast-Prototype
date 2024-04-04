import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert, Animated, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa FontAwesome

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const scaleAnim = new Animated.Value(1);

  const handlePressPay = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    Alert.alert("Pagamento", "Pagamento realizado com sucesso!");
  };

  const handlePressApplePay = () => {
    Alert.alert("Apple Pay", "Apple Pay foi selecionado!");
  };

  const handlePressPayPal = () => {
    Alert.alert("PayPal", "PayPal foi selecionado!");
  };

  const handlePressPix = () => {
    Alert.alert("Pix", "Pagamento via Pix foi selecionado!");
  };

  const iconSize = 20;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#FF8B01" barStyle="light-content" translucent={false} />

        <Text style={styles.title}>Pagamento</Text>

        <TextInput
          style={styles.input}
          placeholder="Número do Cartão"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Validade"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          secureTextEntry
          value={cvv}
          onChangeText={setCvv}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor a Pagar"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TouchableOpacity style={styles.button} onPress={handlePressPay}>
          <Icon name="credit-card" size={iconSize} color="#fff" />
          <Text style={styles.buttonText}> Pagar com Cartão</Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.buttonApplePay} onPress={handlePressApplePay}>
            <Icon name="apple" size={iconSize} color="#fff" />
            <Text style={styles.buttonText}> Pagar com Apple Pay</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.buttonPayPal} onPress={handlePressPayPal}>
          <Icon name="paypal" size={iconSize} color="#fff" />
          <Text style={styles.buttonText}> Pagar com PayPal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPix} onPress={handlePressPix}>
          <Icon name="qrcode" size={iconSize} color="#fff" />
          <Text style={styles.buttonText}> Pagar com Pix</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  button: {
    backgroundColor: "#FF8B01",
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonApplePay: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonPayPal: {
    backgroundColor: "#003087",
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonPix: {
    backgroundColor: "#32CD32", // Uma cor verde para representar o Pix
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10, // Mantém o espaçamento entre o ícone e o texto
  },
});
