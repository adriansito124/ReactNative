import { FlatList, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import data from "./constants/dataEx.json";
import { Item } from "@/components/item";

export default function List() {
  return (
    <>
      <Text style={styles.center}>Listaa</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.back}
          data={data}
          renderItem={({ item }) => (
            <Item name={item.nome} age={item.idade} date={item.data} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    paddingHorizontal: 20,
    zIndex: 99,
  },
  center: {
    textAlign: "center",
    shadowColor: "#171717",
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 100,
  },
});
