import React from 'react';
import { SafeAreaView,ScrollView,StatusBar, Image, View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Utils/Button';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
  const styles = StyleSheet.create({

    safeArea: {
      flex: 1,
      backgroundColor: 'white' // Assegura que a cor de fundo seja branca para todo o componente
    },
    body:{
      marginTop: 30,
      width: '100%',
      backgroundColor:'white',
    },
    header: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
    },
    title: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'white' // Assegura que a cor de fundo seja branca para todo o componente

    },
    mockads:{
      height: 255,
      width: '93%',
      borderRadius:10,
      marginBottom: 20,

    },
    mockimage: {
      height: 131,
      width: '92%'
    },
    mockimageTwo: {
      height: 181,
      width: '90.5%',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  const navigation = useNavigation();

  const handlePressOrder = () => {
    navigation.navigate('Orders'); // Navegue para a tela de Order ao pressionar o botão
};
const handlePressCoupons = () => {
  navigation.navigate('Coupons'); // Navegue para a tela de Order ao pressionar o botão
};

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <View style={[styles.row, { marginBottom: 10, backgroundColor:'white', }]}>
          <Text style={styles.title}>Av. Das Américas - Barra da Tijuca </Text>
          <Image source={require('../../../assets/arrowback.png')} />
        </View>
        <Image source={require('../../../assets/bannerHomerecorted.png')} style={styles.mockads} />
        <View style={{
          marginTop: 10
        }}/>
        <Image source={require('../../../assets/marketshome.png')} style={styles.mockimage} />
        <View style={{
          marginTop: 10
        }}/>
        <Image source={require('../../../assets/banner3.png')} style={styles.mockimageTwo} />
        
        <Button onPress={handlePressOrder}
          title="Orders and Fiscal Coupons"
          iconName="receipt" // Usando MaterialIcons
        />

        <View style={{ marginTop: 10 }}/>

        <Button onPress={handlePressCoupons}
          title="Coupons and Discounts"
          iconName="local-offer" // Usando MaterialIcons
        />

        <View style={{ marginTop: 10 }}/>

        <Button
          title="Favorites"
          iconName="favorite-border" // Usando MaterialIcons
        />
        <View style={{
          marginTop: 10,
          marginBottom: 20,
        }}/>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
