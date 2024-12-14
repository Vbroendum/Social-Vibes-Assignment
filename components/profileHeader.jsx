import { View, Text, Image, StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';


function ProfileHeader() {
    return (
        <View >
            <Image source={require('../assets/forest.png')} style={{ width: '100%', height: 150 }} />
            <Image source={require('../assets/victor.png')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: -75 }} />
            <View style={Style.profileContainer}>
                <View style={Style.rowContainer}>
                    <View style={Style.textColumn}>
                        <Text style={Style.usernameText}>@username</Text>
                        <Text style={Style.descriptionText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae pariatur, adipisci libero amet nam minima.
                        </Text>
                    </View>
                <Ionicons name="flame" size={48} color={"orange"} style={Style.iconStyle} />
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader

const Style = StyleSheet.create({
    profileContainer: {
        padding: 16,
      },
      rowContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
      },
      textColumn: {
        flex: 1, 
        marginRight: 16,
      },
      usernameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      descriptionText: {
        fontSize: 14,
        color: '#555',
      },
      iconStyle: {
        flexShrink: 0, 
      },
    });