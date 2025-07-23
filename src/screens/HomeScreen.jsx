
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Email from "../components/Email";

export default function HomeScreen({ navigation }) {
const [visible, setVisible]= useState(false);

  return (
      <SafeAreaView style = {styles.background}>
         <Modal visible={visible} transparent={true} animationType='fade'>
          <View style= {styles.modalArea}> 
              <Email/>
            <TouchableOpacity style={{flexDirection: 'column' }} onPress={()=> setVisible(false) }>
              <Text  style={styles.modalButton}>Salvar e fechar</Text>
            </TouchableOpacity>
             </View>
        </Modal>
    
        <TouchableOpacity style={styles.buttonConfigs} onPress={() => setVisible(true)}>
          <Text style={styles.buttonText}>modal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConfigs} onPress={() => navigation.navigate("QRcodeScreen")}>
          <Text style={styles.buttonText}>Ler QR Code</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonConfigs} onPress={() => navigation.navigate("BarcodeScreen")}>
          <Text style={styles.buttonText}>Ler Codigo de Barra</Text>
        </TouchableOpacity>

       
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#d91e24"
    
  },
  overlay: {
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    borderRadius: 12,
    alignItems: "center",
  },
  buttonConfigs: {
    backgroundColor: "#dc3545",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  modalArea :{
    backgroundColor: '#ffffff',
    marginHorizontal: '30',
    padding: '10',
  }
  ,
    modalButton:{
      flexDirection: 'column',
      backgroundColor: '#000000',
      color : '#FFFFFF',
      alignItems: "flex-end"
    }
});
