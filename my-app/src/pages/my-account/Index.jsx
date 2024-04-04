import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Account() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        profilePic: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL da imagem de perfil padrão
    });

    const handleInputChange = (name, value) => {
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSave = () => {
        // Aqui você pode adicionar a lógica para salvar as informações, como uma chamada de API.
        Alert.alert('Salvar', 'Informações salvas com sucesso!');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FF6B00" barStyle="light-content" translucent={false} />

                {/* Exibe a foto do perfil selecionada ou a foto padrão */}
                <Image source={{ uri: userInfo.profilePic }} style={styles.profilePic} />

                <Text style={styles.headerText}> Minha Conta</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#A9A9A9"
                    value={userInfo.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#A9A9A9"
                    value={userInfo.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                    value={userInfo.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    placeholderTextColor="#A9A9A9"
                    value={userInfo.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', // Consider a softer shade or a more diverse color palette
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#333', // Changed for better readability
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#FFF', // Lighter background
        color: '#333', // Darker text for contrast
        borderWidth: 1,
        borderColor: '#FF6B00', // Orange border instead of background
        borderRadius: 10,
        padding: 15,
        width: '100%',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: '#FF6B00',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
});
