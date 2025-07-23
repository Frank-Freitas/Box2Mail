import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export default function QRcodeScreen() {
  const { permission, requestPermission } = useCameraPermissions();
  const [scanData, setScanData] = useState("");
  const [flashRole, setFlashRole] = useState("off");

  const requestPer = useEffect( () => {
    if (requestPermission) {
      requestPermission();
    }
  }, [requestPermission]);

  if (permission === false) {
    return (
      <View>
        <Text>Permissao de uso de camera nao concedida</Text>
        <TouchableOpacity onPress={requestPer}>
          <Text>permitir uso de camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const scannerResult = (result) => {
    setScanData(result.data);
  };

  const flashFlip = () => {
    if (flashRole === "off") {
      setFlashRole("on");
    } else {
      setFlashRole("off");
    }
  };

  return (
    <SafeAreaView>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        facing="back"
        flash={flashRole}
        onBarcodeScanned={scannerResult}
      >
        <View>
        <TouchableOpacity onPress={flashFlip}>
          <Text>flash</Text>
        </TouchableOpacity>
        </View>
        
      </CameraView>
    </SafeAreaView>
  );
}
