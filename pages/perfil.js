import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from '../components/menu.js'
import api from "../services/api"
import {useEffect, useState} from 'react'

export default function Perfil() {
  
  const [pezinhos, setPezinhos] = useState([])
  useEffect(()=>{
    async function loadPezinhos(){
      const response = await api.get('/api.json')
      setPezinhos(response.data)
    }
    loadPezinhos();
  },[])
  return (
    <View style={styles.wrap}>
    <ScrollView style={styles.conteinerCoisa}>
      <View style={styles.areaImagePerfil}>
        <Image style={styles.imagePerfil} source={require('../assets/mina-do-pezinho-perfil.jpg')} />
      </View>
      <View style={styles.dados}>
        <Text style={styles.nome}>
          Adriana Martis
        </Text>
        <View  style={styles.infos}>
          <Icon name="graduation-cap" size={15} color="#FD3078" />
          <Text style={styles.infosText}>Estudante de </Text>
          <Text style={styles.infosTextStrong}>Farmacia </Text>
        </View>
        <View  style={styles.infos}>
          <Icon name="map-marker" size={15} color="#FD3078" />
          <Text style={styles.infosText}>Frequenta</Text>
          <Text style={styles.infosTextStrong}> Iesb Oesste</Text>
        </View>
        <View  style={styles.infos}>
          <Icon name="user-o" size={15} color="#FD3078" />
          <Text style={styles.infosText}>Seguido(a) por 500 pessoas </Text>
        </View>
        <View  style={styles.infos}>
          <Icon name="home" size={15} color="#FD3078" />
          <Text style={styles.infosText}>Mora em </Text>
          <Text style={styles.infosTextStrong}>Ceilândia</Text>
        </View>
        
      </View>
      <View style={styles.dados}>
       <Text style={styles.titleList}>Pezinhos Privados <Icon name="lock" size={14} color="#BCBCBC" /></Text>
      </View>
      <ScrollView style={styles.dados}>
        <FlatList 
        data={pezinhos}
        horizontal={true}
        keyExtractor={(item) => item.title}
        renderItem = {({item}) =>
        <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: item.thumb
          }}
          />

        </View>}
        />
     </ScrollView>
      <View style={styles.dados}>
       <Text style={styles.titleList}>Pezinhos</Text>
      </View>
      <ScrollView style={styles.dados}>
        <FlatList 
        data={pezinhos}
        horizontal={true}
        keyExtractor={(item) => item.title}
        renderItem = {({item}) =>
        <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: item.thumb
          }}
          />

        </View>}
        />
     </ScrollView>
    </ScrollView>
    <Menu/>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems:'center',
    flexDirection:'column',
    padding: 10,
    backgroundColor: "#fff"
  },
  imagePerfil: {
    width: 150,
    height: 150,
    borderRadius: 200,
    borderColor: '#FD3078',
    borderWidth: 5,
    marginTop: 20,
  },
  nome:{
    fontSize: 30,
    color:'#FE476C',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  dados:{
    width: '95%'
  },
  infos:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  infosText: {
    fontSize: 15,
    color: '#FD3078',
  },
  infosTextStrong:{
    fontSize: 15,
    color: '#FD3078',
    fontWeight: 'bold'
  },
    image:{
    width:100,
    height:200,
  },
  content:{
    width: 75,
    height:100,
    backgroundColor:'red',
    marginLeft: 10,
    overflow: 'hidden'
  },
  titleList:{
    color: '#BCBCBC',
    textAlign: 'justify',
    alignItems: 'flex-start',
    padding: 10
  },
  areaImagePerfil:{
    alignItems: 'center'
  },
  conteinerCoisa:{
    maxHeight: '95%'
  }
})