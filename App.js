import * as React from 'react';
import "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from './screens/Home';
import {Nosotros} from './screens/Nosotros';
import {Contacto} from './screens/Contacto';
import {Testimonios} from './screens/Testimonios';
import {Productos} from './screens/Productos';
import {Iniciar} from './screens/IniciarSesion';
//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';

const Menu = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Home" component={Home} />
        {/* <Menu.Screen name="Nosotros" component={Nosotros} />
        <Menu.Screen name="Contactos" component={Contacto} />
        <Menu.Screen name="Testimonios" component={Testimonios} />
        <Menu.Screen name="Productos" component={Productos} />
        <Menu.Screen name="Iniciar sesion" component={Iniciar} /> */}
      </Menu.Navigator>
    </NavigationContainer>
  );
}