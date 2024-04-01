import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Animated, StyleSheet, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { navigate } = useNavigation();
  const linePosition = useRef(new Animated.Value(0)).current;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const totalTabs = state.routes.length;
  const tabWidth = 100; // Adjust as needed

  const translateX = linePosition.interpolate({
    inputRange: [0, totalTabs - 1],
    outputRange: [0, (totalTabs - 1) * tabWidth],
  });

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#FF6B00', height: 80 }}>
<StatusBar backgroundColor="#FF6B00" barStyle="light-content" translucent={false} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Estilos específicos para o elemento "Scan"
        const isScanTab = label === "Scan";
        const tabStyle = isScanTab ? styles.scanTab : null;
        const textStyle = isScanTab ? styles.scanText : null;
        const iconColor = isScanTab ? (isFocused ? 'black' : 'black') : (isFocused ? 'black' : 'white');

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, tabStyle]}
            key={route.name}
          >
            {/* Adicionando o círculo branco apenas para o elemento "Scan" */}
            {isScanTab && <View style={styles.circle} />}
            <Ionicons
              name={options.tabBarIcon}
              size={24}
              color={iconColor} // Aplicando a cor do ícone
            />
            {isScanTab && <Text style={[{ color: 'white' }, textStyle]}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
      {/* Adicionando a linha animada */}
      <Animated.View
        style={{
          position: 'absolute',
          height: 2,
          width: tabWidth,
          backgroundColor: 'transparent', // Color of the line
          bottom: 0,
          transform: [{ translateX }],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scanTab: {
    // Estilos específicos para o elemento "Scan"
    backgroundColor: 'white', // Fundo branco
  },
  scanText: {
    // Estilos específicos para o texto do elemento "Scan"
    fontWeight: 'bold', // Exemplo de texto em negrito
    color: 'black',
  },
});

export default CustomTabBar;
