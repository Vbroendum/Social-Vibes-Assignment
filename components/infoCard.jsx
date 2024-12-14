import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoCard = ( { header, content, nameOfIcon, color }) => {
    const iconBackgroundColor = color === "orange" ? "#ffd700" : "#05efff";
    const iconColor = color === "orange" ? "#ffa500" : "#00a2ad";

    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
            <Ionicons name={nameOfIcon} size={24} color={iconColor} style={{zIndex: 1}} />
            </View>
            <View>
                <Text style={styles.headerText}>{header}</Text>
                <Text style={styles.text}>{content} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8F8FF",
        borderRadius: 8,
        margin: 4,
        padding: 8,
        width: "47.68%",
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00a2ad",
        marginLeft: 10,
    },
    text: {
        fontSize: 14,
        color: "#555",
        marginLeft: 10,
    },
    iconContainer: {
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
}
});

export default InfoCard;