import { CameraView, CameraType, useCameraPermissions  } from "expo-camera";
import { View, Text, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react"

export default function QRcodeScreen() {
  const {permission, requestPermission} = useCameraPermissions();
  const [sideCam, setSideCam] = useState<CameraType>('back');
  const [scanData, setScanData] = useStade("");
  const [flashRole, setFlashRole]= useState("off");

  const scannerResult  = (result) => {
    setScanData(result.data);
  }

  const flashFlip = ()=>{
    if(flashRole === "off"){
      setFlashRole("on")
    }else{
      setFlashRole("off")
    }
  } 

  // 1. Verificando o estado inicial de carregamento da permissão
  if (permission === null) {
    return (
      <View style={styles.container}>
        <Text>Verificando permissão da câmera...</Text>
      </View>
    );
  }

  // 2. Verificando se a permissão foi concedida
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Precisamos da sua permissão para usar a câmera.
        </Text>
        {/* 3. Botão para solicitar a permissão */}
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  return (
    <View>
      <CameraView barcodeScannerSettings={{
        barcodeTypes:['qr'],
      }} 
      facing={sideCam}
      flash={flashRole}
      onBarcodeScanned={scannerResult}
      >
      <TouchableOpacity onPress={flashFlip}><Text>flash</Text></TouchableOpacity>  
      </CameraView>
      
    </View>
  );
}
