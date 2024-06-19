// Ejemplo utilizando React Navigation v5
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NosotrosScreen from '../screens/NosotrosScreen';
import ContactoScreen from '../screens/ContactoScreen';
import TestimoniosScreen from '../screens/TestimoniosScreen';
import ProductosScreen from '../screens/ProductosScreen';
import IniciarScreen from '../screens/IniciarSesionScreen';

const Stack = createStackNavigator();

function Vistas() {
return (<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Nosotros" component={NosotrosScreen} />
  <Stack.Screen name="Contactos" component={ContactoScreen} />
  <Stack.Screen name="Testimonios" component={TestimoniosScreen} />
  <Stack.Screen name="Productos" component={ProductosScreen} />
  <Stack.Screen name="Iniciar sesion" component={IniciarScreen} />
</Stack.Navigator>);

}
  
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Vistas />
    </NavigationContainer>
  );
}
