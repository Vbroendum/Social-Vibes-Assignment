import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageCards(props) {
    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
            <Text>See Album &gt;&gt;</Text>
            </View>
            <View style={style.imageContainer}>
                <Image source={require('../assets/forest.png')} style={style.Image} />
                <Image source={require('../assets/forest.png')} style={style.Image} />
                <Image source={require('../assets/forest.png')} style={style.Image} />
                <Image source={require('../assets/forest.png')} style={style.Image} />
                <Image source={require('../assets/forest.png')} style={style.Image} />
                <Image source={require('../assets/forest.png')} style={style.Image} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 16
    },
    imageContainer: {
        marginLeft: 16,
        marginRight: 16,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    Image: {
        width: '28%',
        height: 100,
        borderRadius: 8,
        margin: 8
    }
  });