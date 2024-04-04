import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
    const navigation = useNavigation();
    const [cupom, setCupom] = useState('');
    const [showText, setShowText] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: '001',
            desc: ['Nutella / 500G', ' 12,00'],
            quantidade: 1,
            imagem: require('../../../assets/1.png')
        },
        {
            id: '002',
            desc: ['Milk Italac / 1L', ' 2,60'],
            quantidade: 2,
            imagem: require('../../../assets/2.png')
        },
        {
            id: '003',
            desc: ['Coffee Expresso / 1KG', ' 6,70'],
            quantidade: 1,
            imagem: require('../../../assets/3.png')
        },
        {
            id: '004',
            desc: ['Rice Tio João / 1KG', ' 8,00'],
            quantidade: 3,
            imagem: require('../../../assets/4.png')
        }
    ]);

    const aplicarCupom = () => {
        console.log('Cupom aplicado:', cupom);
    };

    const incrementQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantidade += 1;
        setCartItems(newCartItems);
    };

    const decrementQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantidade > 1) {
            newCartItems[index].quantidade -= 1;
        }
        setCartItems(newCartItems);
    };

    const removeItem = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <Image source={item.imagem} style={styles.imagemProduto} />
            <View style={{ flex: 1 }}>
                <Text style={styles.textoDescricao}>{item.desc[0]}</Text>
                <Text style={styles.textoPreco}>CHF{item.desc[1]}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <TouchableOpacity onPress={() => decrementQuantity(index)}>
                        <Ionicons name="remove-circle" size={24} color="#FF6B00" />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item.quantidade}</Text>
                    <TouchableOpacity onPress={() => incrementQuantity(index)}>
                        <Ionicons name="add-circle" size={24} color="#FF6B00" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => removeItem(index)}>
                <Ionicons name="trash-outline" size={24} color="#FF6B00" />
            </TouchableOpacity>
        </View>
    );

    const totalItems = cartItems.reduce((total, item) => total + item.quantidade, 0);
    const subtotal = cartItems.reduce((total, item) => total + item.quantidade * parseFloat(item.desc[1]), 0);
    const desconto = 0;
    const total = subtotal - desconto;

    const handlePress = () => {
        navigation.navigate('Payment'); // Navegue para a tela de pagamento ao pressionar o botão
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {!showText ? (
                    <View>
                        <FlatList
                            data={cartItems}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                        <View style={styles.cupomContainer}>
                            <TextInput
                                style={styles.inputCupom}
                                placeholder="Digite seu cupom"
                                value={cupom}
                                onChangeText={setCupom}
                            />
                            <TouchableOpacity style={styles.botaoAplicar} onPress={aplicarCupom}>
                                <Text style={styles.textoBotao}>Aplicar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.resumoContainer}>
                            <Text style={styles.resumoText}>Subtotal ({totalItems} itens): R${subtotal.toFixed(2)}</Text>
                            <Text style={styles.resumoText}>Desconto: R${desconto.toFixed(2)}</Text>
                            <Text style={[styles.resumoText, styles.totalText]}>Total a pagar: R${total.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.botaoProsseguir} onPress={handlePress}>
                            <Text style={styles.textoBotao}>Prosseguir para a compra</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.texto}>Função Payment executada com sucesso!</Text>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cupomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    inputCupom: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10
    },
    botaoAplicar: {
        backgroundColor: '#FF6B00',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    imagemProduto: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    textoDescricao: {
        fontSize: 16,
        marginBottom: 5
    },
    textoPreco: {
        fontSize: 16,
        color: '#FF6B00'
    },
    resumoContainer: {
        padding: 20
    },
    resumoText: {
        fontSize: 16,
        marginBottom: 5
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF6B00'
    },
    botaoProsseguir: {
        backgroundColor: '#FF6B00',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginBottom: 20
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }
});
