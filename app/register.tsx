import { FIREBASE_AUTH } from "@/firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Image } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const image = require("../assets/images/facebook.png");
const image2 = require("../assets/images/google.png");

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    console.log(auth.currentUser);
  }, [email, pass, confirmPass]);

  useEffect(() => {
    console.log(email, pass, confirmPass);
  }, [email, pass, confirmPass]);

  const register = () => {
    console.log("Register function called");
    if (pass === confirmPass) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
          console.log(dadosUsuario);
          router.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("As senhas não coincidem!");
    }
  };

  return (
    <LinearGradient
      colors={["#D788DCFF", "#7E99E2FF"]} // cores do gradiente
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.centrol}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>to get started now!</Text>
        </View>
        <View style={styles.sep}>
          <View style={styles.inputz}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email Address"
              placeholderTextColor="#ffffff"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Password"
              placeholderTextColor="#ffffff"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={setConfirmPass}
              value={confirmPass}
              placeholder="Confirm Password"
              placeholderTextColor="#ffffff"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
              <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.putz}>
            <View style={styles.hori}>
              <View style={styles.risco}></View>
              <Text style={styles.braco}>Or Login with</Text>
              <View style={styles.risco}></View>
            </View>

            <View style={styles.hori}>
              <TouchableOpacity style={styles.minibutton}>
                <Image source={image2} style={styles.imagen2} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton}>
                <Image source={image} style={styles.imagen2} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.hori2}>
        <Text>Already have an account?</Text>
        <Link style={styles.braco} href={"/"}>
          Login Now
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 40,
    marginBottom: 80,
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
    backgroundColor: "#D0BEEEFF",
    borderRadius: 8,
    marginBottom: 5,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    height: 45,
    width: 250,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",

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
  imagen2: {
    height: 30,
    width: 30,
  },
  risco: {
    height: 1,
    width: 72,
    backgroundColor: "#ffffff",
  },
  hori: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  braco: {
    color: "#ffffff",
  },
  minibutton: {
    backgroundColor: "#FFFFFF",
    height: 45,
    width: 125,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  putz: {
    alignItems: "center",
    gap: 20,
  },
  hori2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
    gap: 5,
  },
});
