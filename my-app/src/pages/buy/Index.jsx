import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from 'expo-camera';

export default function Buy() {
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
    }, []);

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
                <View style={styles.cameraContainer}>
                    <View style={styles.rectangleContainer}>
                        <View style={[styles.rectangle, { borderWidth: 2, borderColor: 'red' }]} />
                    </View>
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            )
                        }}>
                        <Text style={styles.toggleText}></Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black', // Cor de fundo para preencher a tela
    },
    camera: {
        flex: 1,
        aspectRatio: 3/4, // Relação de aspecto para ajustar o tamanho da câmera
        borderWidth: 2,
        borderColor: 'white', // Cor da borda da câmera
    },
    cameraContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100, // Espaço extra abaixo do retângulo
    },
    rectangle: {
        height: 100,
        width:  300,
        backgroundColor: 'transparent',
        borderColor: '#FF0000',
        borderRadius: 10,
    },
    toggleButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    toggleText: {
        fontSize: 20,
        marginBottom: 13,
        color: 'red',
    },
});
