
import * as React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import Botao from '../components/botao.js'
import Input from '../components/input.js'

export default function Login({navigation}) {
  return (
    <View style={styles.wrap}>
        <View style={styles.boxLogo}>
          <Image style={styles.logo} source={require('../assets/nova_logo.png')} />
        </View>
        <Input props="Email ou nome de usuário" />
        <Input props="Senha" />
        <Text onPress={ ()=> navigation.navigate('RecuperacaoUm')} > Esqueceu sua Senha? Obtenha ajuda aqui.</Text>
        <Botao propsNome="Entrar" propsNavegacao={()=>{navigation.navigate('RecuperacaoUm')}}/>
        <Text style={styles.separacao}>
        <View style={styles.linha}></View> ou <View style={styles.linha}> </View></Text>
        <View style={styles.loginSocial}>
           <View>
           <Image style={styles.social} source={require('../assets/facebook.png')} />
           </View>
           <View>
           <Image style={styles.social} source={require('../assets/google.png')} />
           </View>
        </View>
        <Text style= {{color: "#FD3078"}} onPress={ ()=> navigation.navigate('Cadastro')} >Não tem conta? Crie já!</Text>
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
    width: 128,
  },
  boxLogo:{
    paddingTop: 50,
    paddingBottom: 50
  },
  loginSocial:{
    flexDirection:'row',
     paddingTop: 50,
  },
  social:{
    width: 35,
    height: 35,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
  },
  separacao:{
    paddingTop: 50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color: '#FD3078'
  },
  linha:{
    backgroundColor: '#FD3078',
    width: 100,
    height: 3,
    paddingLeft: 40,
  },
})