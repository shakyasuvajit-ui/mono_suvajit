import { Text, StyleSheet, View } from 'react-native';
import { Image } from "expo-image";
import Background from '@/assets/svg/onboarding_bg.svg';
import { Button } from '@/components/buttons';
import { Link, useRouter } from 'expo-router';
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
  
  logintxt:{
    fontSize:14,},
    logintxtlink:{
      color:"#428581",
    }, 

});



export default function Index() {
  const router = useRouter();
  return (
    <View>
    <View>
      <Background/>
       <Image
        source={require('@/assets/svg/onboarding.png')}
        style={styles.logo} />
    </View>
    <Button title="Get Started" type="primary"  onPress={() => router.push('/signup')} />
      <SafeAreaView style={{flexDirection:"row", justifyContent:"center", gap:5}}>
            <Text style={styles.logintxt}>Already have an account?</Text>
            <Link href="/login" style={styles.logintxtlink}>Log in</Link>
      </SafeAreaView>
    </View>
  )
}