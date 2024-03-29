import React from 'react';
import { ScrollView,StatusBar, Image, View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Utils/Button';

const Home = () => {
  const styles = StyleSheet.create({
    body:{
      marginTop: 30,
      width: '100%'
    },
    header: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
    },
    mockads:{
      height: 227,
      width: '90.5%',

    },
    mockimage: {
      height: 131,
      width: '90.5%'
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

  return (
    <ScrollView style={styles.body}>
      <StatusBar/>
      <View style={styles.header}>
        <View style={[styles.row, { marginBottom: 10 }]}>
          <Text style={styles.title}>Av. Das Américas - Barra da Tijuca </Text>
          <Image source={require('../../../assets/arrowback.png')} />
        </View>
        <Image source={require('../../../assets/BannerHome.png')} style={styles.mockads} />
        <View style={{
          marginTop: 10
        }}/>
        <Image source={require('../../../assets/marketshome.png')} style={styles.mockimage} />
        <View style={{
          marginTop: 10
        }}/>
        <Image source={require('../../../assets/banner3.png')} style={styles.mockimageTwo} />
        <Button
          title={"Selecione seu mercado"}
          icon={require('../../../assets/cart.png')}
        />
        <View style={{
          marginTop: 10
        }}/>
        <Button
          title={"Pedidos e cupons fiscais"}
          icon={require("../../../assets/nfs.png")}
        />
        <View style={{
          marginTop: 10
        }}/>
        <Button
          title={"Cupons"}
          icon={require("../../../assets/cupons.png")}

        />
        <View style={{
          marginTop: 10
        }}/>
        <Button
          title={"Favoritos"}
          icon={require("../../../assets/favoritos.png")}

        />
        <View style={{
          marginTop: 10
        }}/>
        <Button
          title={"Configurações"}
          icon={require("../../../assets/configuracoes.png")}

        />
        <View style={{
          height: 40
        }}/>
      </View>
    </ScrollView>
  );
};

export default Home;
