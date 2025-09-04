import {CameraView, useCameraPermissions} from "expo-camera";
import { useEffect, useState, useRef } from "react";
import {SafeAreaView, StyleSheet, Text, View,TouchableOpacity} from "react-native";

export default function Camera({types,navigation}) {
  const [permission, requestPermission] = useCameraPermissions();
  const [dataFile, setDataFile] = useState("");
  const scanRef = useRef(false);
  const scanData = (data)=>{
    if(scanRef.current){
      return
    }
    setDataFile(data);
    scanRef.current = true;
    console.log(`DADOS ATRIBUIDDOS COM SetDataFile: ${JSON.stringify(data)}`)
    navigation.navigate( 'Login')
  }

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, [permission]);


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
        onBarcodeScanned={scanData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spaceArea: {
    flex: 1,
  },
});
