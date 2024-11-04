import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";

interface User {
  id: string;
  tipo: string;
  name: string;
  url: string;
}

interface ProductDetailsProps {
  product: User;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productName}>{product.tipo}</Text>
      <Image 
        source={{ uri: product.url }} 
        style={styles.productImage}
      />
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backButton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<User | null>(null);

  const filtrado = tipoSelecionado
    ? users.filter((user) => user.tipo === tipoSelecionado)
    : users;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "users"),
      (snapshot) => {
        const userList: User[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            tipo: doc.id,
          ...doc.data(),
        })) as User[];
        setUsers(userList);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleVisit = (product: User) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} onBack={handleBack} />;
  }

  return (
    <View style={styles.container}>
        
      <Picker
        selectedValue={tipoSelecionado}
        onValueChange={(itemValue) => setTipoSelecionado(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Tudo" value="" />
        <Picker.Item label="Camiseta" value="camiseta" />
        <Picker.Item label="Blusa" value="blusa" />
        <Picker.Item label="Bermuda" value="bermuda" />
        <Picker.Item label="Calça" value="calça" />
        <Picker.Item label="Jaqueta de couro" value="jaqueta" />
      </Picker>

      <FlatList
        data={filtrado}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.tipo}</Text>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleVisit(item)}>
              <Text style={styles.visitButton}>Visitar</Text>
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
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  visitButton: {
    backgroundColor: "#4b6beb",
    height: 30,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    color: "#ffffff",
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productName: {
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
    color: "#4b6beb",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 280, 
    height: 300, 
    marginVertical: 10,
  },
});
