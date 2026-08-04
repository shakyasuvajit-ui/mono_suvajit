import { Text, StyleSheet, View } from 'react-native';
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
    // paddingVertical: 12,
    // margin:10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
    borderWidth:1,
    boxShadow: "0px 6px 16px -3px rgba(0,0,0,0.46)",
    height:55,
    alignSelf:'center',
    width:'90%',
    marginTop:50,
    color:"black", 

  },
  textblwbtn:{
    marginTop:10,
    textAlign:"center",
    fontSize:14,},
    logintxt:{
      color:"#428581",
    }
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
      <SafeAreaView>
          <Button title="Get Started" type="primary" style={styles.button} onPress={() => router.push('/signup')} />
            <Text style={styles.textblwbtn}>Already have an account? <Text style={styles.logintxt}>Log in</Text></Text>
      </SafeAreaView>
    </View>
  )
}