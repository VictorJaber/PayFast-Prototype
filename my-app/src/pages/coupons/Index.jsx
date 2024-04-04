import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Coupons() {
  const copyToClipboard = (couponCode) => {
    Clipboard.setString(couponCode);
    ToastAndroid.show("Código copiado para a área de transferência!", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Coupons</Text>
      <View style={styles.couponContainer}>
        <CouponItem
          icon="ticket"
          offer="20% de desconto em todas as frutas e vegetais"
          category="Frutas e Vegetais"
          onPressCopy={() => copyToClipboard("FRUTAS20")}
        />
        <CouponItem
          icon="ticket"
          offer="10% de desconto em todas as carnes"
          category="Carnes"
          onPressCopy={() => copyToClipboard("CARNES10")}
        />
        <CouponItem
          icon="ticket"
          offer="Leve 3, Pague 2 em todos os produtos lácteos"
          category="Produtos Lácteos"
          onPressCopy={() => copyToClipboard("LACTEOS32")}
        />
        <CouponItem
          icon="ticket"
          offer="5 reais de desconto na compra de 2 produtos de limpeza"
          category="Produtos de Limpeza"
          onPressCopy={() => copyToClipboard("LIMPEZA5")}
        />
        <CouponItem
          icon="ticket"
          offer="15% de desconto em todos os produtos congelados"
          category="Produtos Congelados"
          onPressCopy={() => copyToClipboard("CONGELADOS15")}
        />
        <CouponItem
          icon="ticket"
          offer="Frete grátis em todas as compras"
          category="Frete Grátis"
          onPressCopy={() => copyToClipboard("FRETEGRATIS")}
        />
      </View>
    </View>
  );
}

const CouponItem = ({ icon, offer, category, onPressCopy }) => {
  return (
    <View style={styles.couponItem}>
      <Icon name={icon} size={20} color="#FF6B00" style={styles.icon} />
      <View style={styles.couponText}>
        <Text style={styles.offer}>{offer}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <TouchableOpacity onPress={onPressCopy} style={styles.copyButton}>
        <Icon name="copy" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  couponContainer: {
    width: "80%",
  },
  couponItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6B00",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  couponText: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  offer: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  copyButton: {
    backgroundColor: "#FF6B00",
    borderRadius: 5,
    padding: 5,
    marginLeft:20,
  },
});
