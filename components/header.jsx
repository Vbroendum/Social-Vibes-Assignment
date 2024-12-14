import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge, withBadge } from 'react-native-elements';

function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Ionicons name="notifications-outline" size={24} color={"#00a2ad"} marginRight={16} />
                <Badge badgeStyle={{ backgroundColor: 'orange', position: 'absolute', top: -10, right: 18 }} badgeCount={1} />
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="#00a2ad"  />
                <Badge badgeStyle={{ backgroundColor: 'orange', position: 'absolute', top: -10, right: 1 }} badgeCount={1} />
            </View>
            <View style={styles.headerRight}>
                <Ionicons name="ellipse" size={24} color={"#00a2ad"} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00a2ad'}} >400</Text>
                <Ionicons name="menu-outline" size={24} color="#00a2ad" style={{ marginLeft: 16 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginTop: 40,
      height: 60,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      color: '#00a2ad',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Header