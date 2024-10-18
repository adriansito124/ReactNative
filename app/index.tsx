import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Link, router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //const [count, setCount] = useState(0);
 // const onPress = () => setCount((prevCount) => prevCount + 1);

 const onPress = () => {
    router.push("/(tabs)")
 }

  console.log(email, pass);
  console.log();

  return (
    <>
      <SafeAreaView>
        <Text>LOGIN</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Insira sua senha"
          keyboardType="default"
          secureTextEntry={true}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btntext}>ENTRAR</Text>
          </TouchableOpacity>
          <View>
          <Link href={"/register"}>Cadastrar novo Usuario</Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#CACACAFF",
  },
  button: {
    backgroundColor: "#353535FF",
  },
  btntext: {
    fontFamily: "Inter",
    color: "#FFFFFFFF",
  },
});
