import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Botao from '../components/botao.js'
import Input from '../components/input.js'

export default function RecuperacaoTres({navigation}) {
  return (
     <View style={styles.wrap}>
        <View style={styles.boxLogo}>
          <Image style={styles.logo} source={require('../assets/nova_logo.png')} />
        </View>

        <Input props="Nova Senha" />
        <Input props= "Confirme Senha" />
        <Botao propsNome="ALTERAR" propsNavegacao={()=>{navigation.navigate('Perfil')}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    padding: 10,
    backgroundColor: "#fff"
  },
   logo:{
    height: 30,
    width: 128
  },
   boxLogo:{
    paddingTop: 50,
    paddingBottom: 50
  }
})