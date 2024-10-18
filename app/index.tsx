import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <LinearGradient
      colors={["#D788DCFF", "#7E99E2FF"]} // cores do gradiente
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.centrol}>
          <Text style={styles.title}>Welcome,</Text>
          <Text style={styles.subtitle}>Glad to see you!</Text>
        </View>
        <View style={styles.sep}>
          <View style={styles.inputz}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
        </View>

        <Link href={"/register"}>Cadastrar novo Usuario</Link>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3 / 4,
    padding: 20, // Adiciona um pouco de padding
    gap: 80,
  },
  centrol: {
    alignItems: "center",
  },
  inputz: {
    alignItems: "center",
    gap: 4,
  },
  sep: {
    alignItems: "center",
    gap: 50,
  },
  title: {
    fontFamily: "Rale",
    fontSize: 30,
    fontWeight: "700",
    color: "#ffffff",
  },
  subtitle: {
    fontFamily: "Rale",
    fontSize: 30,
    fontWeight: "400",
    color: "#ffffff",
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: "#FFFFFFFF",
    backgroundColor: "#D7C7F2FF",
    borderRadius: 8, // Adiciona bordas arredondadas
    marginBottom: 5, // Espaçamento entre os inputs
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    height: 45,
    width: 250,
    justifyContent: "center",
    borderRadius: 8, // Adiciona bordas arredondadas
    alignItems: "center", // Centraliza o texto no botão

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  btntext: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000FF",
  },
  background: {
    flex: 1, // Faz o gradiente ocupar toda a tela
  },
  imagen: {
    height: 90,
    width: 67,
  },
});
