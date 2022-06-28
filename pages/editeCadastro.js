import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Botao from '../components/botao.js'
import Input from '../components/input.js'
import Menu from '../components/menu.js'
import api from "../services/api"
import {useEffect, useState} from 'react'

export default function EditeCadastro() {
  
  const [pezinhos, setPezinhos] = useState([])
  const [alterarNome, setAlterarNome] = useState(false)
  const [nome, setNome] = useState('Adriana Martis')
  const [campo, setCampo] = useState('Adriana Martis')
  function handleInfo(props){
    setAlterarNome(true)
    setCampo('Alterar ' + props)
  }
  function handleNovaInfo(){
    setAlterarNome(false)
  }
  useEffect(()=>{
    async function loadPezinhos(){
      const response = await api.get('/api.json')
      setPezinhos(response.data)
    }
    loadPezinhos();
  },[])
  return (
    <View style={styles.wrap}>
      <View>
      <View style={styles.areaImagePerfil}>
        <Image style={styles.imagePerfil} source={require('../assets/mina-do-pezinho-perfil.jpg')} />
      </View>
      <View style={styles.dados}>
        <Text style={styles.nome} onPress={()=>handleInfo('nome')}>
          {nome} <Icon name="pencil-square-o" size={20} color="#FD3078" />
          
        </Text>

        <View  style={styles.infos} >
          <Icon name="pencil-square-o" size={15} color="#FD3078" onPress={()=>handleInfo('curso')}/>
          <Text style={styles.infosText}>Estudante de </Text>
          <Text style={styles.infosTextStrong}>Farmacia </Text>
        </View>
        <View  style={styles.infos}>
          <Icon name="pencil-square-o" size={15} color="#FD3078" onPress={()=>handleInfo('local de estudo')}/>
          <Text style={styles.infosText}>Frequenta</Text>
          <Text style={styles.infosTextStrong}> Iesb Oesste</Text>
        </View>
        <View  style={styles.infos}>
          <Icon name="pencil-square-o" size={15} color="#FD3078" onPress={()=>handleInfo('moradia')} />
          <Text style={styles.infosText}>Mora em </Text>
          <Text style={styles.infosTextStrong}>Ceilândia</Text>
        </View>
        {alterarNome === true ?  
          <View style={styles.wrap}>
            <Input props = {campo} />
            <Text style={styles.salvarInfo }  onPress={()=>handleNovaInfo() }>Salvar</Text>
            </View>
          :<></> 
        }
        
      </View>
      </View>
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
    padding: 10,

  },
  salvarInfo:{
    padding: 5,
    backgroundColor: '#FD3078',
    color: '#ffffff',
    borderRadius: 5,
    marginTop: 10
  },
  areaImagePerfil:{
    alignItems: 'center'
  }
})