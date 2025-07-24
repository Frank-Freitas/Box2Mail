import {CameraView, useCameraPermissions} from "expo-camera";
import { useEffect, useState } from "react";
import {SafeAreaView, StyleSheet, Text, View,TouchableOpacity} from "react-native";

export default function Camera({types}) {
  const [permission, requestPermission] = useCameraPermissions();
  const [dataFile, setDataFile] = useState("");
  const [errorMsgs, setErrorMsg] = useState("");

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  const dataScan = (data) => {
    if(!data){
        setErrorMsg("Dados nao encontrados")
    }
    setDataFile(data);
    console.log(data)
  };

  if (!permission) {
    return (
      <SafeAreaView>
        <Text>Carregando ...</Text>
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView>
        <View>
          <Text>Permissão negada</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => requestPermission()}>
            <Text>Pedir Permissão</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.spaceArea}>
      <CameraView
        style={styles.spaceArea}
        barcodeScannerSettings={{
          barcodeTypes: [types],
        }}
        onBarcodeScanned={dataScan}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spaceArea: {
    flex: 1,
  },
});
