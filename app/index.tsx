import { StyleSheet, View } from 'react-native';
import { Image } from "expo-image";
import Background from '@/assets/svg/onboarding_bg.svg';
import { Button } from '@/components/buttons';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
  logo: {
    position: "absolute",
    top: 100,
    right:10,
    left:0,
    bottom:0
  },
  button:{
    backgroundColor:"#549B96",
            paddingHorizontal: 12,
            paddingVertical: 12,
            margin:10,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
  }
});

export default function index() {
  return (
    <View>
    <View>
      <Background />
     <Image
        source={require('@/assets/svg/onboarding.png')}
        style={styles.logo} />
    </View>
    <View>
        <button title='Get started' style={{
        }}></button>
    </View>
    </View>
  )
}