import { View, StyleSheet, Text } from "react-native";

export const Item = ({name, age, date} : {name: string, age: string, date: string}) => {
    return(
        <>
            <View style={styles.itemList}>
                <Text style={styles.teixto}>{name}</Text>
                <Text style={styles.teixto}>{age}</Text>
                <Text style={styles.teixto}>{date}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4168a4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 30,
    },
    teixto: {
        fontSize: 15,
    }
})