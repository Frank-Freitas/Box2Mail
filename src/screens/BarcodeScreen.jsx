import { View, Text, TouchableOpacity, Button } from "react-native"; // Adicione Button aqui
import { CameraView, CameraType, CameraMode, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function BarcodeScreen({ navigation }) {
  const [sideCam, setSideCam] = useState<CameraType>('back');
  // CORREÇÃO AQUI: Desestruture como um OBJETO, não um array
  const { permission, requestPermission } = useCameraPermissions();

  if (!permission) {
    /*
     * criar logica de carregamento de camera no futuro
     * Link do expo https://docs.expo.dev/versions/latest/sdk/camera/#installation
     */
    return null; // ou um componente de carregamento
  }

  if (!permission.granted) {
    /**
     * A convenience boolean that indicates if the permission is granted.
     */
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        {/* Use o requestPermission obtido da desestruturação */}
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}> {/* Adicione um estilo para centralizar */}
      <CameraView style={{ flex: 1 }} facing={sideCam}> {/* Adicione estilo para a câmera preencher */}
        <View style={styles.buttonContainer}> {/* Adicione um estilo para o botão */}
          <TouchableOpacity onPress={() => setSideCam(prevSideCam => prevSideCam === 'back' ? 'front' : 'back')} style={styles.button}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
};