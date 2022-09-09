import React, {useEffect, useState} from "react";
import { 
  View,
  Image,
  Text
} from "react-native";
import { Firebase } from "../services/firebase";
import { theme } from "../services/theme";

export function Nivel(){
  const [Gas, setGas] = useState();
  useEffect(() => {
    Firebase.database().ref("/Sensores/").on("value", (data)=> {
      setGas(data.val().gas)
    })
  })

  if(Gas <= 10){
    return(
      <View style={{alignItems: 'center'}} >
      <View style={{
        backgroundColor: 'green',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={theme.img.alegre} style={{height: 40, width: 40}} />
      </View>
      <Text style={{
        marginTop: '5%',
        color: 'white',
        opacity: 0.6
      }}>sem vazamente</Text>
      </View>
    )
  } else {
    return(
      <View style={{alignItems: 'center'}} >
      <View style={{
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={theme.img.triste} style={{height: 40, width: 40}} />
      </View>
      <Text style={{
        marginTop: '5%',
        color: 'white',
        opacity: 0.6
      }}>tem vazamente</Text>
      </View>
    )
    }
  }
