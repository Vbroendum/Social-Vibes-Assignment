import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from 'react';
import ImageCards from './imageCards';
import Trophies from './trophies';
import InfoCard from './infoCard';
import ExperienceCard from './experienceCard';


export default function Seperator() {
const [activeIcon, setActiveIcon] = useState('image');

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={style.iconRow}>
                <TouchableOpacity onPress={() => handleIconClick('image')}>
                    <Ionicons name="image" size={32} color={"#00a2ad"} 
                    style={[ activeIcon === 'image' && style.activeIconBorder]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconClick('bag')}>
                    <Ionicons name="bag" size={32} color={"#00a2ad"} style={[activeIcon === 'bag' && style.activeIconBorder]} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconClick('social')}  >
                    <Ionicons name="analytics" size={32} color={"#00a2ad"} style={[ activeIcon === 'social' && style.activeIconBorder]} />
                </TouchableOpacity>
            </View>
            <View>
                {activeIcon === 'image' && 
                <View>
                    <ImageCards title= "#Malmö Game Week" />
                    <ImageCards title= "KEA Connection" />
                    <ImageCards title= "BFF's" />
                </View>}
                {activeIcon === 'social' &&
                <View>
                <Trophies />
                <View style={style.cardRow}>
                    <InfoCard header="15" content="Friends" nameOfIcon="people" color="#00a2ad" />
                    <InfoCard header="4" content="Circles" nameOfIcon="earth" color="#00a2ad"/>
                    <ExperienceCard/>
                    <InfoCard header="10" content="Streak" nameOfIcon="flame" color="#00a2ad"/>
                    <InfoCard header="15" content="Challenges" nameOfIcon="balloon" color="orange"/>
                    <InfoCard header="37" content="Activities" nameOfIcon="star" color="orange"/>
                    <InfoCard header="12972" content="Total XP" nameOfIcon="sparkles" color="#00a2ad"/>
                    <InfoCard header="4" content="Banners" nameOfIcon="image" color="#00a2ad"/>
                    <InfoCard header="17" content="Adventures" nameOfIcon="trophy" color="orange"/>
                </View>
                </View>}
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 16
      },
      icon: {
        padding: 8,
    },
      activeIconBorder: {
        borderBottomWidth: 2,
        borderColor: '#00a2ad',
      },
      cardRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 24,
      }
});

