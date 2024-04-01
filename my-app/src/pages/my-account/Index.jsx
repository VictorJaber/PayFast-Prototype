import React from "react";
import { View,Text, StyleSheet, StatusBar } from "react-native";

export default function Account (){
    return(
        <View >
            <StatusBar backgroundColor="#FF8B01" barStyle="light-content" translucent={false} />

            <Text >Página My Account</Text>
        </View>
    )
}

