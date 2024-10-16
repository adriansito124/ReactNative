import { ImageSourcePropType, View, Text, Image, StyleSheet } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.tezto}>Header exemplo</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    tezto: {
        color: "#ffff",
        fontWeight: "700",
        fontSize: 30
    }
})