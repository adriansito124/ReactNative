import { FIRESTORE_DB } from "@/firebaseConfig";
import {
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

interface User {
  id: string;
  name: string;
  tipo: string;
  url: string;
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newTipo, setNewTipo] = useState("camiseta");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "users"),
      (snapshot) => {
        const userList: User[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as User[];
        setUsers(userList);
      }
    );

    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    if (newUser === "") {
      Alert.alert("Por favor, insira um nome.");
      return;
    }
    await addDoc(collection(FIRESTORE_DB, "users"), {
      name: newUser,
      tipo: newTipo,
      url: newUrl,
    });
    setNewUser("");
    setNewUrl("");
  };

  const deleteUser = async (id: string) => {
    await deleteDoc(doc(FIRESTORE_DB, "users", id));
  };

  const updateUser = async (id: string) => {
    if (newUser === "") {
      Alert.alert("Por favor, insira um novo nome para o produto.");
      return;
    }

    const userRef = doc(FIRESTORE_DB, "users", id);

    await updateDoc(userRef, {
      name: newUser,
    });

    setNewUser("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Novo Produto"
        value={newUser}
        onChangeText={setNewUser}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Imagem"
        value={newUrl}
        onChangeText={setNewUrl}
      />
      {/* Picker */}
      <Picker
        selectedValue={newTipo}
        style={styles.input}
        onValueChange={(itemValue) => setNewTipo(itemValue)}
      >
        <Picker.Item label="Camiseta" value="camiseta" />
        <Picker.Item label="Blusa" value="blusa" />
        <Picker.Item label="Bermuda" value="bermuda" />
        <Picker.Item label="Calça" value="calça" />
        <Picker.Item label="Jaqueta de couro" value="jaqueta" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={addUser}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.name}</Text>
            <Text>{item.tipo}</Text>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateUser(item.id)}>
              <Text style={styles.deleteButton}>Atualizar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4b6beb",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  deleteButton: {
    color: "red",
  },
});
