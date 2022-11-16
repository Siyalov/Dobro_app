import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from '@rneui/themed';
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserRequests from "./pages/userRequests";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ title: 'Начальная страница', }} component={Home} />
        <Stack.Screen name="form" options={{ title: 'Обратиться за помощью', }} component={Form} />
        <Stack.Screen name="login" options={{ title: 'Вход', }} component={Login} />
        <Stack.Screen name="userRequests" options={{ title: 'Ваши запросы', }} component={UserRequests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
