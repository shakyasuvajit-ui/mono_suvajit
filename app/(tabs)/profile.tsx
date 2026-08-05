import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { Image } from "expo-image";
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '@/assets/svg/prof_bg.svg';
import Background_Design from '@/assets/svg/bckgrnd_design.svg';
import Pfp from '@/assets/svg/pfp.svg';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    image: {
        position: "relative",
        alignSelf: "center",
        width: 90,
        height: 90,
        // top: -70
},
    name: {
        fontSize: 23,
        fontWeight: '600',
        color: '#1A1A1A',
        marginTop: 10,
    },
    handle: {
        fontSize: 15,
        color: '#438883',
        fontWeight: '500',
        marginTop: 2,
    },
    // name: {
    //     position: "absolute",
    //     alignSelf: "center",
    //     fontSize: 24,
    //     top: 75,
    //     fontWeight: 500,
    // },
    // handle: { 
    //     alignSelf: "center",
    //     fontSize: 15,
    //     top: -40,
    //     color: "#438883"
    // },
    profile_text: {
        paddingLeft: 20,
        fontSize: 18,
        // fontWeight: 500,
        flex:1
    },
    container: {
        marginTop: 24,
        paddingHorizontal: 24,
    },
    item:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
    },
    navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 10,
    position:"absolute",
    top:0, left:0, right:0,
  },
  bellButton: {
    padding: 8,
    // backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    position: 'relative',
  },
});
export default function Profile() {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={{position: "relative", height: 220}}>
                {/* background with overlay */}
                <Background preserveAspectRatio="none" style={StyleSheet.absoluteFillObject}/>
                <Background_Design preserveAspectRatio="none" style={StyleSheet.absoluteFillObject}/>
                
                {/* topbar with arrow, prof, notif */}
                <SafeAreaView style={styles.navBar}>
                    <TouchableOpacity style={{padding:8}}>
                    <AntDesign name="left" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    
                    <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600',}}>Profile</Text>

                    <TouchableOpacity style={styles.bellButton}>
                    <MaterialCommunityIcons name="bell-outline" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            {/* profile info */}
            <View style={{alignItems:"center"}}>
                <Pfp style={styles.image}/>
                <Text style={styles.name}>Enjelin Morgeana</Text>
                <Text style={styles.handle}>@enjelin_morgeana</Text>
            </View>
            {/* list options */}
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Ionicons name="diamond-sharp" size={24} color="#48B4A2" />
                    <Text style={styles.profile_text}>Invite Friends</Text>
                </TouchableOpacity>

                <View style={{borderBottomColor: '#EEEEEE',
                borderBottomWidth: 1,}}>
                </View>

                <TouchableOpacity style={styles.item}>
                    <MaterialCommunityIcons name="account" size={24} color="black" />
                    <Text style={styles.profile_text}>Account Info</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <MaterialIcons name="people-alt" size={24} color="black" />
                    <Text style={styles.profile_text}>Personal profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <FontAwesome name="envelope" size={24} color="black" />
                    <Text style={styles.profile_text}>Message center</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}   >
                    <MaterialCommunityIcons name="shield-half-full" size={24} color="black" />
                    <Text style={styles.profile_text}>Login and security</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.item}>
                    <Fontisto name="locked" size={24} color="black" />
                    <Text style={styles.profile_text}> Data and privacy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        //  </View>

    )
}