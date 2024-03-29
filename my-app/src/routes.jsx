import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buy from "./pages/buy/Index";
import Cart from "./pages/cart/Index";
import Account from "./pages/my-account/Index";
import Orders from "./pages/orders/Index";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: 'transparent',
            }
        }}
        >
            <Tab.Screen name="Buy" component={Buy}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Account" component={Account}/>
            <Tab.Screen name="Orders" component={Orders}/>
        </Tab.Navigator>
    )
}