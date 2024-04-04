import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';


export default function Scan() {
    const navigation = useNavigation();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'web') {
                const { status } = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            } else {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        })();

        const timer = setTimeout(() => {
            navigation.navigate('PageProduct'); // Certifique-se de que 'PageProduct' é o nome correto da rota
        }, 5000);

        // Limpeza do timer quando o componente for desmontado
        return () => clearTimeout(timer);
    }, [navigation]);

    if (hasPermission === null) {
        return <Text>Verificando permissões da câmera...</Text>;
    }
    if (hasPermission === false) {
        return <Text>Você precisa habilitar as permissões da câmera para usar este aplicativo.</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <Camera
                style={styles.camera}
                type={type}
            >
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            </Camera>
            <Text style={styles.scanText}>Scan Here</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    camera: {
        flex: 1,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    rectangle: {
        height: 100,
        width: 300,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius:5,
    },
    scanText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 24,
        fontWeight:'bold',
    },
});
