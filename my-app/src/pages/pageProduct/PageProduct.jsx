import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, SafeAreaView } from "react-native";

export default function PageProduct() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="#FF8B01" barStyle="light-content" translucent={false} />
        <Text style={styles.title}>Rice Tio João / 1KG</Text>
        <Image source={require('../../../assets/4.png')} style={styles.productImage} />
        <View style={styles.priceAndQuantityContainer}>
          <Text style={styles.price}>CHF 8,00</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Informações Nutricionais</Text>
        <View style={styles.nutritionalTable}>
            <Text style={[styles.info, styles.nutritionalInfo, { backgroundColor: '#FFF7EC'}]}>Calorias: 100 kcal</Text>
            <Text style={[styles.info, styles.nutritionalInfo]}>Proteínas: 5g</Text>
            <Text style={[styles.info, styles.nutritionalInfo, { backgroundColor: '#FFF7EC'}]}>Gorduras Totais: 2g</Text>
            <Text style={[styles.info, styles.nutritionalInfo]}>Gorduras Saturadas: 0.5g</Text>
            <Text style={[styles.info, styles.nutritionalInfo, { backgroundColor: '#FFF7EC'}]}>Fibras: 3g</Text>
            <Text style={[styles.info, styles.nutritionalInfo]}>Sódio: 150mg</Text>     
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => {/* Ação de adicionar ao carrinho */}}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  priceAndQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ajuste para ocupar a largura total
    paddingHorizontal: 20, // Adicione um pouco de espaço nas laterais
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutritionalTable: {
    alignSelf: 'stretch',
    borderRadius: 6, // Ajustado para ser ligeiramente menor
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF8B01',
    backgroundColor: 'white', // Certifique-se de que o fundo seja explicitamente definido
  },
  
  nutritionalInfo: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontWeight: 'normal',
  },
  // Estilos existentes ajustados conforme necessário
  info: {
    alignSelf: 'flex-start',
    marginBottom: 0, // Remover a margem para usar o espaçamento da tabela
  },
  // Outros estilos...
  addButton: {
    backgroundColor: '#FF8B01',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },  
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  productImage: {
    borderColor: '#FF8B01',
    borderWidth: 1,
    borderRadius:10,
    width: 300, 
    height: 300, 
    marginBottom: 20,
  },
  price: {
    fontSize: 22,
    color: '#FF8B01',
    marginBottom: 10,
    fontWeight:'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  info: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityButton: {
    borderRadius:5,
    paddingTop: 5,
    paddingBottom:5,
    paddingRight:15,
    paddingLeft:15,
    backgroundColor: '#FF8B01',
    margin: 15,
  },
  quantityText: {
    fontSize: 20,
    color:'white',
  },
  quantity: {
    fontSize: 20,
  },
  addButton: {
    backgroundColor: '#FF8B01',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20, // Novo espaçamento
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF8B01',
    borderRadius: 28,
    elevation: 8 
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
