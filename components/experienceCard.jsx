import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExperienceCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.leftColumn}>
        <Ionicons name="star" size={30} color="#F1C40F" />
      </View>
      <View style={styles.middleColumn}>
        <Text style={styles.header}>39200/50000</Text>
        <View style={styles.experienceBarContainer}>
          <View style={[styles.experienceBar, { width: '78%' }]} />
        </View>
        <Text style={styles.xpText}>600 XP to next level</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>Level 20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8F8FF',
    width: '100%',
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    display: 'flex',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
  },
  middleColumn: {
    flex: 2, 
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    justifyContent: 'start',
  },
  experienceBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginBottom: 8,
  },
  experienceBar: {
    height: '100%',
    backgroundColor: '#00A2AD',
    borderRadius: 4,
  },
  xpText: {
    fontSize: 12,
    color: '#666',
  },
  levelBadge: {
    position: 'absolute',
    top: -30,
    right: 3,
    backgroundColor: '#F1C40F',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  levelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ExperienceCard;
