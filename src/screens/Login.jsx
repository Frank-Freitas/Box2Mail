import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/img/page_5_Moderna.png")} resizeMode="cover" style={styles.background}>
      <SafeAreaView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text style={styles.modalButtonText}>Entrar</Text>
          </TouchableOpacity>
          <StatusBar hidden={true} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  modalButtonText: {
    fontWeight: 'bold',
    borderRadius: 10,
    marginTop: 330,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#1a5fdfff",
    paddingVertical: 8,
    paddingHorizontal: 40,
  }
});
