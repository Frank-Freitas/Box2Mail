import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BarcodeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <CameraView>
        
      </CameraView>
    </SafeAreaView>
  );
}
