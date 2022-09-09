import React, {useEffect, useState} from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Nivel } from "../components/vaz";
import { Firebase } from "../services/firebase";
import { theme } from "../services/theme";

export function Home(){

  const [Gas, setGAs] = useState()

  const [Menor, setMenor] = useState(100);
  const [Maior, setMaior] = useState(0); 

  useEffect(() => {
    Firebase.database().ref('/Sensores/').on("value",(data) => {
      const value = data.val().gas

      setGAs(value)
    })
    if (Gas >= Maior){
      setMaior(Gas);
    }
    if (Gas <= Menor){
      setMenor(Gas)
    }
  })

  return(
    <SafeAreaView style={Style.cont} >
      <Image source={theme.img.log} style={Style.img} />
      <View style={Style.v}>
        <View style={Style.v1}>
          <Text style={Style.txt}>{Gas}</Text>
          <Text style={Style.txt1}>Nivel de gas</Text>
        </View>
        <View style={Style.v1}>
          <Nivel/>
        </View>
      </View>
      <View style={Style.v3}>
        <View style={Style.v1}>
          <Text style={Style.txt2}>menor valor</Text>
          <Text style={Style.txt3}>{Menor}</Text>
        </View>
        <View style={Style.v1}>
          <Text style={Style.txt2}>maior valor</Text>
          <Text style={Style.txt3}>{Maior}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const Style = StyleSheet.create({
  cont:{
    flex: 1,
    backgroundColor: theme.colors.primal,
    alignItems: 'center',
    paddingTop: '10%'
  },
  img:{
    height: 100,
    width: 250,
  },
  v:{
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    borderBottomColor: theme.colors.sec,
    borderBottomWidth: 1,
    marginHorizontal: '10%'
  },
  v1:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    fontSize: 35,
    color: 'white'
  },
  txt1:{
    color: 'white',
    opacity: 0.6
  },
  v2:{
    borderBottomColor: theme.colors.sec,
    borderBottomWidth: 1,
    height: '30%',
    width: "90%"
  },
  v3:{
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txt2:{
    color: 'white',
    opacity: 0.6,
    fontSize: 15,
    marginBottom: '10%'
  },
  txt3:{
    color: 'white',
    fontSize: 25
  }
})
