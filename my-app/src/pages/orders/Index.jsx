import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Orders() {
  // Simulated data for orders
  const orders = [
    { id: 1, date: "01/04/2024", amount: 100.0 },
    { id: 2, date: "02/04/2024", amount: 150.0 },
    { id: 3, date: "03/04/2024", amount: 200.0 },
  ];

const navigation = useNavigation();


  const generateInvoice = (orderId) => {
    console.log("Generating invoice for order ID:", orderId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      {orders.map((order) => (
        <View key={order.id} style={styles.orderContainer}>
          <View style={styles.orderInfo}>
            <Text style={styles.orderText}>Número do Pedido: {order.id}</Text>
            <Text style={styles.orderText}>Data: {order.date}</Text>
            <Text style={styles.orderText}>Valor: R${order.amount.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Gerar NF"
              icon={
                <Ionicons
                  name="document-outline"
                  size={20}
                  color="#ffffff"
                  style={{ marginRight: 5 }}
                />
              }
              buttonStyle={styles.button}
              onPress={() => generateInvoice(order.id)}
            />
            <Button
              title="Ver Lista"
              buttonStyle={[styles.button, styles.secondaryButton]}
              onPress={() => console.log("Outro botão clicado")}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderInfo: {
    flex: 1,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom:10,

  },
  secondaryButton: {
    backgroundColor: "#2ECC71", // Altere a cor conforme necessário
  },
});
