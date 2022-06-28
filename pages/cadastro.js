import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Botao from '../components/botao.js'
import Input from '../components/input.js'

export default function Cadastro({navigation}) {
  return (
     <View style={styles.wrap}>
        <View style={styles.boxLogo}>
          <Image style={styles.logo} source={require('../assets/nova_logo.png')} />
        </View>

        <Input props="Nome" />
        <Input props= "Senha"  securyText={true}/>
        <Input props="Email" />
        <Input props="Tamanho do pé"/>
        <Text style= {{textAlign: "center", width: '80%', color: '#FD3078'}}>Ao clicar em Cadastrar, você concorda com     nossos Termos, Política de Dados e Política de Cookies</Text>
        <Botao propsNome="CADASTRAR"/>
        <Text style={styles.separacao}>
        <View style={styles.linha}></View> ou <View style={styles.linha}> </View></Text>
        <View style={styles.loginSocial}>
           <View>
           <Image style={styles.social} source={require('../assets/facebook.png')} />
           </View>
           <View>
           <Image style={styles.social} source={require('../assets/google.png')} />
           </View>
        <Text style= {{textAlign: "center", width: '80%', color: '#FD3078'}}  onPress={ ()=> navigation.navigate('Login')}>Já tem uma conta? Acesse aqui.</Text>
      </View>
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
     paddingTop: 40
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
    marginTop: 50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color: '#FD3078'
  },
  linha:{
    backgroundColor: '#FD3078',
    width: 100,
    height: 1,
    paddingLeft: 40,
  },
})