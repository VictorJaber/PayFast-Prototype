import React from 'react';
import { View, StyleSheet, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './src/pages/cart/Index';
import Account from './src/pages/my-account/Index';
import Orders from './src/pages/orders/Index';
import CustomTabBar from './src/customBarTab';
import Home from './src/pages/Home/home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Scan from './src/pages/scan';
import Payment from './src/pages/payment/Index';
import PageProduct from './src/pages/pageProduct/PageProduct';
import Coupons from './src/pages/coupons/Index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente para tela de detalhes do produto
const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6B00"/>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF6B00"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ title: 'Payment',
            headerStyle:{
              backgroundColor: '#FF6B00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ title: 'Payment',
            headerStyle:{
              backgroundColor: '#FF6B00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } }}
          />
          <Stack.Screen
            name="PageProduct"
            component={PageProduct}
            options={{ 
              title: 'Product',
              headerStyle:{
                backgroundColor: '#FF6B00',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
             }}
          />
          <Stack.Screen
            name="Coupons"
            component={Coupons}
            options={{ 
              title: 'Coupons',
              headerStyle:{
                backgroundColor: '#FF6B00',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

// Navigator principal que contém o Bottom Tab Navigator
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ 
          tabBarIcon: 'home-outline',
          headerStyle: {
            backgroundColor: '#FF6B00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ 
          tabBarIcon: 'bag-outline',
          headerStyle: {
            backgroundColor: '#FF6B00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Tab.Screen
        name="Scan" 
        component={Scan} 
        options={{ 
          tabBarIcon: 'scan-outline',
          headerStyle: {
            backgroundColor: '#FF6B00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} 
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ 
          tabBarIcon: 'receipt-outline',
          headerStyle: {
            backgroundColor: '#FF6B00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />       
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ 
          tabBarIcon: 'person-outline',
          headerStyle: {
            backgroundColor: '#FF6B00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor:'white',
  }
});
