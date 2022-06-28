import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Botao from '../components/botao.js'
import Input from '../components/input.js'

export default function RecuperacaoDois({navigation}) {
  return (
     <View style={styles.wrap}>
       <View style={styles.boxLogo}>
          <Image style={styles.logo} source={require('../assets/nova_logo.png')} />
        </View>
        <Text style= {{textAlign: "center"}}>Insira o código de recuperação enviado no e-mail</Text>
        <Input props="XXXX" />
        <Botao propsNome="VALIDAR" propsNavegacao={()=>{navigation.navigate('RecuperacaoTres')}}/>
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