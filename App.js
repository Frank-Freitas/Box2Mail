import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Login from "./src/screens/Login";
import HomeScreen from "./src/screens/HomeScreen";
import BarcodeScreen from "./src/screens/BarcodeScreen";
import QRcodeScreen from "./src/screens/QRcodeScreen";
import Email from "./src/components/Email";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BarcodeScreen" component={BarcodeScreen} />
          <Stack.Screen name="QRcodeScreen" component={QRcodeScreen} />
          <Stack.Screen name="Email" component={Email} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
