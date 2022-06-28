import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
  export default function Botao({navigation, propsNome, propsNavegacao}){

    return(

    <View style={styles.wrapBotao}>
         <Button 
         color="#000" 
         style={styles.botao}
         onPress={propsNavegacao}>
          {propsNome}
          </Button>
    </View>
    );
  }
const styles = StyleSheet.create({
    wrapBotao:{
      width: '85%',
    },
    botao:{
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 1,
      height: 40,
      justifyContent: 'center',
      marginTop: 15,
    }
})