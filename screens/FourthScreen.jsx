import { View, ScrollView } from "react-native"
import ProfileHeader from "../components/profileHeader"
import Seperator from "../components/seperator"
import ImageCards from "../components/imageCards"

function FourthScreen(props) {
    return (
        <ScrollView>
            <ProfileHeader />
            <Seperator />
        </ScrollView>
    )
}

export default FourthScreen