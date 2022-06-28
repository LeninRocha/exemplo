import * as React from 'react';
import Login from './pages/login.js';
import Cadastro from './pages/cadastro'
import RecuperacaoUm from './pages/recuperacaoUm'
import RecuperacaoDois from './pages/recuperacaoDois'
import RecuperacaoTres from './pages/recuperacaoTres'
import Perfil from './pages/perfil'
import EditeCadastro from './pages/editeCadastro'



import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="EditeCadastro" component={EditeCadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecuperacaoTres" component={RecuperacaoTres} />
      <Stack.Screen name="RecuperacaoDois" component={RecuperacaoDois} />
      <Stack.Screen name="RecuperacaoUm" component={RecuperacaoUm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
