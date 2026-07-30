import { StyleSheet, View } from 'react-native';
import { Image } from "expo-image";
import Background from '@/assets/svg/onboarding_bg.svg';
import { Button } from '@/components/buttons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
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
            paddingHorizontal: 30,
            paddingVertical: 12,
            margin:10,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor:"black",
            borderWidth:1.5,
            boxShadow: "0px 6px 16px -3px rgba(0,0,0,0.46)",
            height:61,
            marginTop:80,

  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
  
});

const router = useRouter();

export default function Index() {
  return (
    <View>
    <View>
      <Background/>
       <Image
        source={require('@/assets/svg/onboarding.png')}
        style={styles.logo} />
    </View>
      <SafeAreaView>
          <Button title="Get Started" type="primary" style={styles.button} textStyle={styles.buttonTitle} onPress={() => router.push('/tabs/profile')} />
      </SafeAreaView>
    </View>
  )
}