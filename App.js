import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import chat from "./screens/Chat";
//https://www.youtube.com/watch?v=Ov3Z3vD5zFw&t=202s&ab_channel=CodewithBeto  16 20
const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
     
    </View>
  );
}



