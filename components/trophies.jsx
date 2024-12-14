import { View, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Trophies() {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        {/* Icon with rotated background */}
        <View style={[styles.iconContainer, { backgroundColor: '#ff6347' }]}>
          <Ionicons name="trophy" size={28} color={"#fff"} style={styles.icon} />
        </View>
        <View style={[styles.iconContainer, { backgroundColor: '#98FF98' }]}>
          <Ionicons name="body" size={28} color={"#fff"} style={styles.icon}/>
        </View>
        <View style={[styles.iconContainer, { backgroundColor: '#00a2ad' }]}>
          <Ionicons name="book" size={28} color={"#fff"} style={styles.icon}/>
        </View>
        <View style={[styles.iconContainer, { backgroundColor: '#00a2ad' }]}>
          <Ionicons name="brush" size={28} color={"#fff"} style={styles.icon}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    padding: 10,
    marginHorizontal: 24,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }], 
    margin: 5, 
  },

  icon: {
    transform: [{ rotate: '-45deg' }], 
  },
});
