import React, { useState } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buy from './src/pages/buy/Index';
import Cart from './src/pages/cart/Index';
import Account from './src/pages/my-account/Index';
import Orders from './src/pages/orders/Index';
import CustomTabBar from './src/customBarTab';
import Home from './src/pages/Home/home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Scan from './src/pages/scan';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#FF6B00"/>
    <NavigationContainer>
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen
  name="Home"
  component={Home}
  options={{ 
    tabBarIcon: 'home-outline',
    headerStyle: {
      backgroundColor: '#FF6B00', // Defina a cor de fundo desejada
    },
    headerTintColor: '#fff', // Opcional: Define a cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Opcional: Estilo do texto do título do cabeçalho
    }
  }}
/>

  <Tab.Screen
    name="Cart"
    component={Cart}
    options={{ tabBarIcon: 'bag-outline',
    headerStyle: {
      backgroundColor: '#FF6B00', // Defina a cor de fundo desejada
    },
    headerTintColor: '#fff', // Opcional: Define a cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Opcional: Estilo do texto do título do cabeçalho
    }

  }}
  />
  <Tab.Screen
    name="Scan" 
    component={Scan} 
    options={{ tabBarIcon: 'scan-outline',
    headerStyle: {
      backgroundColor: '#FF6B00', // Defina a cor de fundo desejada
    },
    headerTintColor: '#fff', // Opcional: Define a cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Opcional: Estilo do texto do título do cabeçalho
    } }} 
  />
  <Tab.Screen
    name="Account"
    component={Account}
    options={{ tabBarIcon: 'person-outline',
    headerStyle: {
      backgroundColor: '#FF6B00', // Defina a cor de fundo desejada
    },
    headerTintColor: '#fff', // Opcional: Define a cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Opcional: Estilo do texto do título do cabeçalho
    }
  }}
  />
  <Tab.Screen
    name="Orders"
    component={Orders}
    options={{ tabBarIcon: 'receipt-outline',
    headerStyle: {
      backgroundColor: '#FF6B00', // Defina a cor de fundo desejada
    },
    headerTintColor: '#fff', // Opcional: Define a cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Opcional: Estilo do texto do título do cabeçalho
    }
  }}
  />        
</Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
  }
})