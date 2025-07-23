import { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Email() { 
    const [senderEmail, setSenderEmail] = useState();
  const [recipientEmail, setRecipientEmail] = useState();

  return (
    <SafeAreaView>
      <View style={styles.boxSenttings}>
        <Text>Remetente</Text>
        <TextInput
          placeholder="Email de envio"
          placeholderTextColor="#ccc"
          value={senderEmail}
          onChangeText={setSenderEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View>
        <Text>Destinatário</Text>
        <TextInput
          placeholder="Email de destino"
          placeholderTextColor="#ccc"
          value={recipientEmail}
          onChangeText={setRecipientEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxSenttings: {
    borderRadius: 10,
    borderColor: '#1a5fdfff'
  }
});
