import React, { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/Pages/home";
import { Splash } from "./src/Pages/splash";
import { theme } from "./src/services/theme";

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <>
    <StatusBar backgroundColor={theme.colors.primal} barStyle="light-content"/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }} >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
