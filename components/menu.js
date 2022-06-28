import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
export default function Menu({navigation}) {
  return (
      <View style={styles.tudo}>
        <Text onPress={ ()=> navigation.navigate('Login')} >
          <Ionicons name="home-outline" size={19} color="black"/>
        </Text>
        <Text onPress={ ()=> navigation.navigate('Login')} >
          <AntDesign name="search1" size={19} color="black" />
        </Text>
        <Text onPress={ ()=> navigation.navigate('Login')}>
          <AntDesign name="user" size={19} color="black" />
        </Text>
        

      </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ccc',
    borderTopWidth: 2,
    minWidth: '100%',
    padding: 10,
    maxHeight: '5%',
    position: 'absolute',
    bottom: 0
  }
});