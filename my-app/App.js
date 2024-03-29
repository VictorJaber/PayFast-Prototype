import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buy from './src/pages/buy/Index';
import Cart from './src/pages/cart/Index';
import Account from './src/pages/my-account/Index';
import Orders from './src/pages/orders/Index';
import CustomTabBar from './src/customBarTab';
import Home from './src/pages/Home/home';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: 'home-outline' }}
        />
        <Tab.Screen
          name="Buy"
          component={Buy}
          options={{ tabBarIcon: 'cart-outline' }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ tabBarIcon: 'person-outline' }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{ tabBarIcon: 'receipt-outline' }}
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